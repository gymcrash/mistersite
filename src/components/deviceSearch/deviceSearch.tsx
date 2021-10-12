import styles from "./deviceSearch.module.scss";
import React, { ReactNode } from "react";

export interface DeviceSearchProps {
    onType: Function;
}

export class DeviceSearch extends React.Component<any, any> {

    render(): ReactNode {
        return <div className={styles.container}></div>
    }
}