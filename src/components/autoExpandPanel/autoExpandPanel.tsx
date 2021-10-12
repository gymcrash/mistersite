import React, { ReactNode } from "react";
import styles from "./autoExpandPanel.module.scss";

interface AutoExpandPanelProps {
    flat?: boolean;
}

export class AutoExpandPanel extends React.Component<AutoExpandPanelProps, any> {


    render(): ReactNode {
        return <div className={styles.perspective}><div className={`${styles.container} ${this.props.flat && styles.flat}`}>{this.props.children}</div></div>
    }
}