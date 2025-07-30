export const Message = ({text, alertType}) => {


    return (
    <>        
        <div className="alert alert-warning" role="alert"
        >{text} {alertType}
        </div>
    </>
)}