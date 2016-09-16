# React confirm Component
> a react componet
alert,confirm and dialogs in one.


***
### Basic Usage
```javascript
import React from 'react'
import ReactConfirm from 'react-rconfirm'

export default class App extends React.Component{
  hanlder(){
    ReactConfirm({
      confirmButtonClass: 'btn-info',
      cancelButtonClass: 'btn-danger'
    });
  };

	render(){
		return (
			<div>
				<button className="btn btn-default" onClick={this.hanlder.bind(this)}>btn</button>
			</div>
		)
	}
}

```

***
### OPTIONS
>Options, their defaults, possibilities and explainations.

|Name|Type|Default|Description|
|------|------|------|------|
| title | String | `'Hello'` | Title of the dialog. |
|content|String,Function|`'Are you sure to continue?'`|Content for the dialog.Or use a function that returns Ajax promise.|
|contentLoaded|function|`function(){}`|(optionally available) If you load content via URL prefix using 'url:http://abc.com/xyz', contentLoaded will be the callback.|
|icon|String|`''`|Icon class prepended before the title.|
|confirmButton|String|`'Okay'`|Button text for the confirm callback.|
|cancelButton|String|`'Close'`|Button text for the cancel callback.|
|confirmButtonClass|String|`'btn-default'`|Class for the confirm button.|
|cancelButtonClass|String|`'btn-default'`|Class for the cancel button.|
|theme|String|`'white'`|Color theme for the dialog.possible options are 'white', 'black', 'material' & 'bootstrap'|
|animation|String|`'zoom'`|The Open animation for the dialog. possible options are right, left, bottom, top, rotate, none, opacity, scale, zoom, scaleY, scaleX, rotateY, rotateYR (reverse), rotateX, rotateXR (reverse)<br/>The 'blur' animation was removed in v1.1.2|
|closeAnimation|String|`'scale'`|The close animation for the dialog. Same options as animation.|
|animationSpeed|Number|`500`|Animation duration in miliseconds.|
|animationBounce|Float|`1.2`|Adds a Bounce open animation, 1 = No bounce|
|keyboardEnabled|Boolean|`false`|Use the ENTER key to trigger the confirm action and ESC key to trigger the cancel action.|
|confirmKeys|Array|`[13]`|When using `keyboardEnabled`, an array of keys that should trigger confirm.<br/>Default 13 // Enter|
|cancelKeys|Array|`[27]`|When using `keyboardEnabled`, an array of keys that should trigger cancel.<br/>Default 27 // Esc key.|
|rtl|Boolean|`false`|Use the Right to left text layout.|
|container|String|`'body'`|Specify where the generated HTML content for jconfirm should append.<br/>By default it appends in the document's <body>.|
|confirm|Function|`function(){}`|function to run after the user clicks the confirm button.|
|cancel|Function|`function(){}`|function to run after the user clicks the cancel button.|
|backgroundDismiss|Boolean|`false`|if the user can dismiss the dialog via clicking outside the dialog.|
|autoClose|String|`false`|Auto-close the dialog within a specified time, if the user doesn't respond.possible option 'confirm&#124;400'. the string is divided in two halves with '&#124;', the first part specifies the button to trigger, 'confirm' or 'cancel'.<br/>The other half specifies the wait time in miliseconds.|
|closeIcon|Boolean|`null`|By default closeIcon is visible if both buttons are false. (dialog mode).closeIcon can be shown by setting this value to true.|
|closeIconClass|String|`false`|By default jQuery confirm uses × html entity for this close symbol.<br/>You can provide icon class here to change it.|
|columnClass|	String|`'col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1'`|Provides a better way to set Custom width and is responsive.<br/>You can also set custom widths for different display sizes using the Bootstraps grid.|
|onOpen|Function|`function(){}`|	This function is triggered when the jquery-confirm element is rendered. (After the popup is displayed)|
|onClose|	Function|	`function(){}`|This function is triggered when the modal is closed.|
|onAction|	Function|	`function(){}`|	This function is triggered when any of the action performed, ie.confirm/cancel/closeicon click.|
|watchInterval|	Number|	`100`|	Watch the modal for changes and gets centered on the screen.

---
