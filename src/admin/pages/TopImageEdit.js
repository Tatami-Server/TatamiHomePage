import CustomImageInput from "@admin/components/CustomImageInput"
import { SimpleForm, Edit, Toolbar, SaveButton } from "react-admin"

const TopImageEditActions = () => {
    return ( 
        <Toolbar>
            <SaveButton />
        </Toolbar>
    )
}

const TopImageEdit = (props) => {
    return  (
        <Edit>
            <SimpleForm toolbar={<TopImageEditActions />}>
                <CustomImageInput />
            </SimpleForm>
        </Edit>
    )
}

export default TopImageEdit