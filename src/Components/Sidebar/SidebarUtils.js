import { SetSidebarTag } from '../../Config/store/actions/LoggedUserActions'
import store from '../../Config/store/store'


export const SetTab = (Tab) => {
    store.dispatch(SetSidebarTag(Tab))
}

export const GetSidebarItemClass = (Item, Tab) => {
    if (Item === Tab)
        return "SidebarItem ActiveSidebar"
    else
        return "SidebarItem"
}

export const GetNavbarSidebarItemClass = (Item, Tab) => {
    if (Item === Tab)
        return "NavBarListSidebarItem ActiveNavbarSidebar"
    else
        return "NavBarListSidebarItem"
}