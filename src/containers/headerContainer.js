import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {changeLocale} from './../redux/headerReducer'
import {compose} from 'redux'
import Header from './../components/Header'

const HeaderContainer = (props) => {
    return <Header changeLocale={props.changeLocale} locale={props.header.locale} />
}

let mapStateToProps = (state) => {
    return {header: state.header}
}

export default compose(
    connect(
        mapStateToProps,
        {changeLocale}
    )(HeaderContainer)
)
