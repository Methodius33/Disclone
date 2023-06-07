import {ReactComponent as SettingsIcon} from '../../media/icons/settings.svg'
import IconButton from './IconButton';

export const SettingsButton=({...props})=>(
    <IconButton
        Icon={SettingsIcon}
        {...props}
    />
)