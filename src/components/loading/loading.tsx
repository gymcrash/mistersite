import React from "react";
import { ReactNode } from "react";
import { CenteredLayout } from "../../layouts/centeredLayout/centeredLayout";
import styles from "./loading.module.scss";

interface LoadingProps {
    message: string;
}

export class Loading extends React.Component<LoadingProps, any> {

    render(): ReactNode {
        return <CenteredLayout>
            <div className={styles.loadingContainer}>
                <h3 className={styles.title}>LOADING</h3>
                <div className={styles.progressBars}>
                    <div className={styles.message}>{this.props.message}</div>
                    <div className={styles.bars}></div>
                </div>
            </div>
        </CenteredLayout>;
    }
}