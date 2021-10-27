import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import unnamed from "../../../files/unnamed.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.infOfMan}>
                <div>
                    <div className={s.avatar}>
                        <img
                            src={props.profile.photos.large != null ? props.profile.photos.large : unnamed}
                            alt=""/>
                    </div>
                    <p className={s.nameProfile}>{props.profile.fullName}</p>
                </div>

                <div className={s.infBirthAndCity}>
                    <p>Обо мне: {props.profile.aboutMe}</p>
                    <div className={s.postBorder}> </div>
                    <p>Контакты: {props.profile.contacts.vk}</p>
                    <div className={s.postBorder}> </div>
                    <p>В поиске работы: {props.profile.lookingForAJobDescription}</p>
                    <div className={s.postBorder}> </div>
                    <div>
                        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;