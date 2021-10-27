import React from "react";
import styles from "../CookingSkills/Skills.module.css";
import SkillsBlockTitle from "../CookingSkills/SkillsBlockTitle";
import SkillsBlockText from "../CookingSkills/SkillsBlockText";
import SkillRedactor from "../CookingSkills/skillRedactor";
import s from "./todayRandom.module.css";


export const Run = (props) => {
    const [fortBlock, setFortBlock] = React.useState(false)
    const [openResult, setOpenResult] = React.useState(false)

    const fortune = (openResult) => {
        setOpenResult(!openResult);
        let showFort = (fortBlock) => {
            setFortBlock(fortBlock)
        };
        setTimeout(showFort, 2000, setFortBlock(!fortBlock));
        let resultBlock = (openResult) =>{
            setOpenResult(!openResult)
        };
        setTimeout(resultBlock, 2000)
    };


    let random = Math.floor(Math.random()*props.specialities.length);

    let arrey =  props.specialities[random];

    return (
        <div>
            <div>
                <button onClick={fortune}
                        className={s.fortune}>
                    Положиться на удачу?
                </button>
                {fortBlock &&
                <div className={s.fortuneCubes}>
                    <img
                         src="https://thumbs.gfycat.com/SecondTartCygnet-size_restricted.gif" alt=""/>
                </div>}
                {openResult && <div className={styles.skillsBlockRandom}>
                    <div className={styles.skillsBlock}>
                        <div className={styles.skillsImages}>
                            <img className={styles.skillsBlockImage} src={arrey.src} alt=""/>
                        </div>
                        <div>
                            <SkillsBlockTitle name={arrey.name} id={arrey.id}/>
                        </div>
                        <div>
                            <SkillsBlockText id={arrey.id} recipe={arrey.recipe}/>
                        </div>
                        <SkillRedactor/>
                    </div>
                </div>}
            </div>
        </div>

    )
};

