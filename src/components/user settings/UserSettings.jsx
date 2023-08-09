import { Link } from "react-router-dom"
import "./userSettings.css"
import { CancelOutlined, AdminPanelSettingsOutlined, AccountCircleOutlined, StyleOutlined, LibraryAddOutlined, LoyaltyOutlined, PersonAddDisabledOutlined, HelpOutlineOutlined } from "@mui/icons-material"

export default function UserSettings(props) {
    const hideSettings = () => {
        props.setShowSettings(false)
    }
    return (
        <div className="settings" >
            <div className="settingsWrapper">
                <CancelOutlined onClick={hideSettings} className="closeSettings" />
                <ul className="SettingsList">
                    <li className="settingsListItem">
                        <AdminPanelSettingsOutlined className='settingsListIcon' />
                        <span className="settingsItemText">Profile Locking</span>
                    </li>
                    <li className="settingsListItem">
                        <AccountCircleOutlined className='settingsListIcon' />
                        <span className="settingsItemText">Profile Information</span>
                    </li><li className="settingsListItem">
                        <StyleOutlined className='settingsListIcon' />
                        <span className="settingsItemText">Posts, Stories and Reels</span>
                    </li><li className="settingsListItem">
                        <LibraryAddOutlined className='settingsListIcon' />
                        <span className="settingsItemText">Followers and Public</span>
                    </li><li className="settingsListItem">
                        <LoyaltyOutlined className='settingsListIcon' />
                        <span className="settingsItemText">Tagging and Mentions</span>
                    </li><li className="settingsListItem">
                        <PersonAddDisabledOutlined className='settingsListIcon' />
                        <span className="settingsItemText">Blocking</span>
                    </li>
                </ul>
                <button className="settingsSeeMore">See More</button>
                <hr className="lineBreak" />
                <div className="helpAndSupport">

                    <HelpOutlineOutlined className='helpIcon' />
                    <span className="helpText">Help & Support</span>

                </div>
                <hr className="lineBreak" />
                <Link to="/login" className="logOutButton">Log Out</Link>

            </div>
        </div>
    )
}
