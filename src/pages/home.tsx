import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AutoExpandPanel } from "../components/autoExpandPanel/autoExpandPanel";
import { ConsoleFillPanel } from "../components/consoleFillPanel/consoleFillPanel";
import { InputLatencySimpleList } from "../components/inputLatencySimpleList/inputLatencySimpleList";
import { Loading } from "../components/loading/loading";
import { CenteredLayout } from "../layouts/centeredLayout/centeredLayout";
import { InputDataActions } from "../store/inputData/inputDataActions";
import { InputDataState } from "../store/inputData/inputDataReducers";
import { AppState } from "../store/store";

export function HomePage() {

    const dispatch = useDispatch();
    const inputData: InputDataState = useSelector<AppState>((state: AppState) => state.inputDataState) as InputDataState

    useEffect(() => {
        if (!inputData.rawData) {
            window.setTimeout(() => dispatch(InputDataActions.LOAD_DATA()), 1000);
        }
    }, [inputData.rawData]);

    return <CenteredLayout>
        <AutoExpandPanel>
            <h2>misterInput device information</h2>
            <ConsoleFillPanel>
                <p>Input latency <strong>performance data</strong> for your favourite <strong>controller</strong> on <strong>misterFPGA</strong></p>
            </ConsoleFillPanel>
        </AutoExpandPanel>

        {!inputData.rawData && <Loading message="Latency data"></Loading>}
        {inputData.rawData && <InputLatencySimpleList data={inputData.playableDevicesRaw}></InputLatencySimpleList>}
        {!inputData.rawData && <Loading message="Latency data"></Loading>}
        {inputData.rawData && <AutoExpandPanel>Hello World</AutoExpandPanel>}

    </CenteredLayout>;
}