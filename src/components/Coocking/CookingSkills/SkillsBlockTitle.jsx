import React from "react";
import styles from "./Skills.module.css";


class SkillsBlockTitle extends React.Component {

    state = {
        editMode: false,
        name: this.props.name
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
    updateTitle = (e) => {
        this.setState({
            name: e.currentTarget.value
        })
    }


    render() {

        return (
            <div>
                {this.state.editMode &&
                <div>
                    <input className={styles.skillsBlockInput}
                           autoFocus={true}
                           onChange={this.updateTitle}
                           onBlur={this.deActivatedEditMode.bind(this)}
                           value={this.state.name}
                    />

                </div>
                }
                {!this.state.editMode &&
                <div onDoubleClick={this.activatedEditMode.bind(this)}>
                    <h6 className={styles.skillsBlockTitle} key={this.props.id}>{this.state.name}</h6>
                </div>
                }
            </div>
        )
    }
}

export default SkillsBlockTitle;