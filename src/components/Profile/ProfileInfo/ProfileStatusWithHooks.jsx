import React, {useEffect, useState} from "react";
import s from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    };
    const deActivateEditMode = () => {
        setEditMode(false)
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div>
            {!editMode &&
            <div className={s.postStatus}
                 onDoubleClick={activateEditMode}>
                <span>{props.status || "------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    className={s.input}
                    autoFocus={true}
                    onBlur={deActivateEditMode}
                    value={status}>
                </input>
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks