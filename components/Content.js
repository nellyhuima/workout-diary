import { View } from "react-native";
import ButtonForAddingModal from "./ButtonForAddingModal";
import ButtonForViewingWorkouts from "./ButtonForViewingWorkouts";

export default function Content() {
    return(
        <View>
            <ButtonForAddingModal/>
            <ButtonForViewingWorkouts/>
        </View>
    )
}