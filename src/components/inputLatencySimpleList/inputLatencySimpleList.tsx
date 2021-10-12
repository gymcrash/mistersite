import React, { ReactNode } from "react";
import { AutoExpandPanel } from "../autoExpandPanel/autoExpandPanel";
import { ConsoleFillPanel } from "../consoleFillPanel/consoleFillPanel";
import { InputLatencyNameValue } from "../inputLatencyNameValue/inputLatencyNameValue";
import styles from "./inputLatencySimpleList.module.scss";

export interface InputLatencySimpleListProps {
    data: Array<any> | undefined;
}

interface InputLatencySimpleListState {
    expanded: boolean;
}

export class InputLatencySimpleList extends React.Component<InputLatencySimpleListProps, InputLatencySimpleListState> {

    constructor(props: InputLatencySimpleListProps) {
        super(props);
        this.state = {
            expanded: false
        };
        console.log(props.data);
    }

    toggleShowAll() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render(): ReactNode {
        if (this.props.data) {
            const length: number = this.props.data.length;
            const attr: string = "Max Measured Latency (in ms)";
            const maxLatency = Array.from(this.props.data).sort((a: any, b: any) => a[`${attr}`] - b[`${attr}`])[this.props.data.length - 1][`${attr}`];
            console.log(maxLatency)
            return <AutoExpandPanel flat={true}>
                <h2>Top Performing Controllers/Joysticks</h2>
                <ol className={styles.list}>
                    {
                        this.props.data.slice(0, length).map((d: any, i: number) => {
                            return <li key={i} className={styles.listItem}><ConsoleFillPanel><InputLatencyNameValue inputData={d} maxLatency={maxLatency} /></ConsoleFillPanel></li>
                        })
                    }
                </ol>
                {/* {<button className={styles.expandButton} onClick={() => { this.toggleShowAll() }}>
                    {!this.state.expanded ? "Show All" : "Show only Top 10"}
                </button>} */}

            </AutoExpandPanel>;
        } else {
            return <></>
        }

    }
}