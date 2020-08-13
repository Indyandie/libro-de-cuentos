import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from '../src/components/Button'


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

// export const Default = () => <Button 
//    config={{...buttonData}} 
//    {...actionData}/>

const Temp = (args) => <Button {...args} />


export const Default = Temp.bind({})
Default.args = {...buttonData}

export const Primary = Temp.bind({})
Primary.args = {...buttonData, type: 'primary', name: 'Primary Button'}


// export const Primary = () => <Button 
//    config={{...buttonData, type: 'primary', name: 'Primary Button'}} 
//    {...actionData}/>