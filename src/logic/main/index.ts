import {print} from '../print'
import {EButtonUsage} from "../../common/enum";

const main = () => {
    let result = 0

    return (state: EButtonUsage) => {
        print(state)
    }
}

export {main}
