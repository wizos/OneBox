import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { JournalText } from "react-bootstrap-icons";
import { SettingItem } from "../components/developer/common";
import ToggleDev from "../components/developer/dev-toggle";
import StageSetting from "../components/developer/stage";
import { t } from "../utils/helper";

const appWindow = getCurrentWindow();

export default function Page() {
    return (
        <div className="bg-gray-50 overflow-y-auto h-[calc(100vh-40px)]">
            <div className="container mx-auto p-4 max-w-md  ">
                <div className="mb-6 rounded-xl overflow-hidden bg-white shadow-none">
                    <div className="divide-y divide-gray-50">
                        <ToggleDev />
                    </div>
                </div>

                <div className="rounded-xl overflow-hidden bg-white shadow-none ">
                    <div className="divide-y divide-gray-50">
                        <StageSetting />

                        <SettingItem
                            icon={<JournalText className="w-5 h-5 text-gray-500" />}

                            title={t("open_log")}
                            subTitle={t("open_log_desc")}
                            disabled={false}
                            onPress={() => {
                                invoke('create_window', {
                                    app: appWindow,
                                    title: "Log",
                                    label: "sing-box-log",
                                    windowTag: "sing-box-log",
                                })
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )


}