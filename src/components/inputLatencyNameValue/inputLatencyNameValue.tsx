import React, { ReactNode } from "react";
import styles from "./inputLatencyNameValue.module.scss";

export interface InputLatencyNameValueProps {
    inputData: any;
    maxLatency: number;
}

export class InputLatencyNameValue extends React.Component<InputLatencyNameValueProps, any> {

    render(): ReactNode {
        const min: number = this.props.inputData["Min Measured Latency (in ms)"];
        const max: number = this.props.inputData["Max Measured Latency (in ms)"];
        const avg: number = this.props.inputData["Average Measured Latency (in ms)"];
        return <div className={styles.container}>
            <span className={styles.name}>{this.props.inputData["Device"]}</span>
            <div className={styles.stats}>
                <div className={styles.barContainer} style={{ width: `102px` }}>
                    <span className={styles.bar} style={{ animationDuration: `${max * 1}ms` }}>
                        <span className={styles.max} style={{ width: `${(max / this.props.maxLatency) * 100}px` }}>
                            <span className={styles.inputBar} ></span>
                        </span>
                        <span className={styles.avgbar} style={{ width: `${(avg / this.props.maxLatency) * 100}px` }}>
                            <span className={styles.inputBar}></span>
                        </span>
                        <span className={styles.min} style={{ width: `${(min / this.props.maxLatency) * 100}px` }}>
                            <span className={styles.inputBar}></span>
                        </span>
                    </span>
                </div>
                <span className={styles.avg}>{this.props.inputData["Average Measured Latency (in ms)"]}ms</span>
            </div>
        </div>;
    }
}