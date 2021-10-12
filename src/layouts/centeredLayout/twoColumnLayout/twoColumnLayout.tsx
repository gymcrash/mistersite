import React, { ReactNode } from "react";
import styles from "./centeredLayout.module.scss";

interface TwoColumnLayoutProps {
    side: ReactNode;
}

export class TwoColumnLayout extends React.Component<any, TwoColumnLayoutProps> {

    constructor(props: TwoColumnLayoutProps) {
        super(props);
    }

    render(): ReactNode {
        return <div className={styles.container}>
            <div className={styles.sideBar}>{this.props.side}</div>
            <div className={styles.main}>{this.props.children}</div>
        </div>
    }
}