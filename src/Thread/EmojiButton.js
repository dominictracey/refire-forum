/**
 * Created by Scott on 11/14/2016.
 */
import React from 'react'
import { styles } from 'refire-app'
import { Button } from 'elemental'

const EmojiButton = ({ styles }) => {
	return (
		<button
		size="small"
		className= {styles.button}
		onClick={() => emojiClick()}
		>
			<span className={styles.iconContainer}>
				Emojis
			</span>
		</button>
	)
}

const css = {
	iconContainer: {
		verticalAlign: "top",
		display: "inline-block",
		margin: "-1px 2px 0 0",
	}
}

export default styles(css, EmojiButton)