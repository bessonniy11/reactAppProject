
import styles from "../CookingSkills/Skills.module.css";
import SkillRedactor from "../CookingSkills/skillRedactor";
import React from "react";


const Random = (props) => {

    return (

        <div className={styles.skills}>
            {props.specialities.map(s => <div className={styles.skillsBlock}>
                    <div className={styles.skillsImages}>
                        <img className={styles.skillsBlockImage} src={s.src} alt=""/>
                    </div>
                    <div>
                        <h6 className={styles.skillsBlockTitle} key={s.id}>{s.name}</h6>
                    </div>

                    <div className="skills-block__bottom">
                        <p className={styles.skillsBlockText}> key={s.id}>{s.recipe}</p>
                    </div>
                    <SkillRedactor />
                </div>
            )}
        </div>


    )
}

export default Random;