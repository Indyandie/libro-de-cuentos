import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from '../components/Button'


export default {
   component: Button, 
   title: 'Components/Native/Button',
   // Our exports that end in "Data" are not stories.
   excludeStories: /.*Data$/, 
}

export const buttonData = {
   id: '1',
   name: 'Default Button',
   type: 'default',
}

export const actionData = { 
   onBtnClick: action('button clicked'),
   disabled: true
}

export const Default = () => <Button 
   config={{...buttonData}} 
   {...actionData}/>


export const Primary = () => <Button 
   config={{...buttonData, type: 'primary', name: 'Primary Button'}} 
   {...actionData}/>