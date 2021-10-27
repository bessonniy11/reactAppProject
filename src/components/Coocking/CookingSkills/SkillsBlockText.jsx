import React from "react";
import styles from "./Skills.module.css";

class SkillsBlockText extends React.Component {

    state = {
        editMode: false,
        recipe: this.props.recipe
    };

    activatedEditMode() {
        this.setState({
            editMode: true
        })
    }

    deActivatedEditMode() {
        this.setState({
            editMode: false
        })
    }
    updateText = (e) => {
        this.setState({
            recipe: e.currentTarget.value
        })
    };

    render() {
        return (
            <div>
                {this.state.editMode &&
                <div>
                    <input className={styles.skillsBlockTextInput}
                           autoFocus={true}
                           onChange={this.updateText}
                           onBlur={this.deActivatedEditMode.bind(this)}
                           key={this.props.id}
                           value={this.state.recipe}
                    />
                </div>
                }
                {!this.state.editMode &&
                <div onDoubleClick={this.activatedEditMode.bind(this)}>
                    <p className={styles.skillsBlockText} key={this.props.id}>{this.state.recipe}</p>
                </div>
                }
            </div>
        )
    }
}

export default SkillsBlockText;