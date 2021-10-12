import React, { ReactNode } from "react";
import styles from "./centeredLayout.module.scss";


export class CenteredLayout extends React.Component<any, any> {
    render(): ReactNode {
        return <div className={styles.container}>{this.props.children}</div>
    }
}