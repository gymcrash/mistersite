import React, { ReactNode } from "react";
import styles from "./consoleFillPanel.module.scss";

export class ConsoleFillPanel extends React.Component<any, any> {

    render(): ReactNode {
        return <div className={styles.container}>
            <div className={styles.screen}></div>
            <span className={styles.text}>{this.props.children}</span>
        </div>;
    }
}