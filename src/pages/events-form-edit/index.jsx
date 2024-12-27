import EditEventForm from "../../component/events-edit"



export const EventFormEdit = (e) => {

    return (
        <div>
            <EditEventForm key={e.id} event={e} />
        </div>
    )
}