import React from 'react'
import {getLocale} from './../utils/localization'
import {
    Alert,
    Button,
    Collapse,
    DropdownButton,
    Item,
    Dropdown,
    Nav,
    FormControl,
    OverlayTrigger,
    Popover,
    FormGroup,
    HelpBlock
} from 'react-bootstrap'

const Header = (props) => {
    console.log(props)
    const handleChangeLocale = (locale) => {
        props.changeLocale(locale)
    }

    return (
        <React.Fragment>
            <div>
                {
                    <DropdownButton
                        title={props.locale === 'ru' ? 'Язык: Русский' : 'Language: English'}
                        id="dropdown-basic-button"
                        bsStyle="primary"
                    >
                        <Dropdown.Item onClick={() => handleChangeLocale('ru')} active={props.locale === 'ru'}>
                            Русский
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleChangeLocale('en')} active={props.locale === 'en'}>
                            English
                        </Dropdown.Item>
                    </DropdownButton>
                }
            </div>
            <div>{getLocale(props.locale, 'locale.navigation.title.files')}</div>
        </React.Fragment>
    )
}

export default Header
