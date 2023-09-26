import SubProduct from "@components/SubProcut";
import SubTitle from "@components/Subtitle";
import { getAll } from "@lib/firebase";
import groupBy from "@util/groupBy";
import { useEffect, useState } from "react";
import { useNotify } from "react-admin"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Style from '@style/components/SubProduct.module.scss';
import EventSortStyle from '@admin/styles/EventSort.module.scss'
import Heading from "@components/Heading";
import dataProvider from "@admin/providers/firestoreDataProvider";

const EventSort = () => {
    const [events, setEvents] = useState([])

    const notify = useNotify();

    useEffect(() => {
        getAll('event').then(eventData => {
            eventData = eventData.map(event => {
                return {
                    ...event,
                    href: event.url || `/event/${event.id}`,
                    img: event.mainImg?.src || '',
                    imgTitle: event.title,
                    eventTypeName: event.eventType.title || ''
                }
            })

            eventData = groupBy(eventData, 'eventTypeName', ['sortNum', 'asc'])
            setEvents(eventData)
        })
    }, [])

    const onDragEndHandle = ({source, destination, draggableId}) => {
        reorder(source.index, destination.index, draggableId)
    }

    const reorder = (startIndex, endIndex, id) => {
        if (!events) return;
    
        const eventData = Object.fromEntries(events);
        const groupName = Object.keys(eventData).find(key => eventData[key].some(item => item.id === id));
    
        if (!groupName) return;
    
        const result = [...eventData[groupName]];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        eventData[groupName] = result;
    
        result.forEach((event, index) => {
            dataProvider.update('event', { id: event.id, data: { ...event, sortNum: index } });
        });
    
        notify("並び順の保存完了", { type: 'success' })
        setEvents(Object.entries(eventData));
    };
    

    return (
        <>
            <Heading heading="イベント並び替え" />
            {events.map(([groupName, events]) => (
                <div key={groupName}>
                    <SubTitle subtitle={groupName} />
                    <DragDropContext onDragEnd={onDragEndHandle}>
                        <Droppable droppableId="droppable">
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    <div className={`${Style["sub-products"]} ${EventSortStyle["event-sort-products"]}`}>
                                        {events.map((event, index) => (
                                            <Draggable key={event.id} draggableId={event.id} index={index}>
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <SubProduct product={event} />
                                                        {/* <p>{event.title}</p> */}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    </div>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            ))}
        </ >
    )
}

export default EventSort