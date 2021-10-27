import React from "react";
import SkillRedactor from "./skillRedactor";
import styles from "./Skills.module.css";
import Preloader from "../../common/Preloader/Preloader";
import SkillsBlockTitle from "./SkillsBlockTitle";
import SkillsBlockText from "./SkillsBlockText";


const Skills = (props) => {

        if (!props.specialities) {
            return <Preloader/>
        }



        return (

            <div className={styles.skills}>
                {props.specialities.map(s => <div className={styles.skillsBlock}>
                        <div className={styles.skillsImages}>
                            <img className={styles.skillsBlockImage} src={s.src} alt=""/>
                        </div>
                        <div>
                           <SkillsBlockTitle name={s.name} id={s.id} updateTitle={props.updateTitle}/>
                        </div>

                        <div className="skills-block__bottom">
                            <SkillsBlockText id={s.id} recipe={s.recipe}/>
                        </div>
                        <SkillRedactor/>
                    </div>
                )}
            </div>
        )
};

export default Skills;