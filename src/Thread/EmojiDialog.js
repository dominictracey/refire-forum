/**
 * Created by Scott on 11/14/2016.
 */
import React from 'react'
import { styles } from 'refire-app'
import SettingsModal from '../Admin/SettingsModal'

const EmojiDialog = ({visible, save, hide, styles}) => {
	return (
		<SettingsModal
		  title="Emoji List"
		  visible={visible}
		  hide={hide}
		  save={save}
		  saveText="Choose"
		  width="small"
		  styles={styles}
		>
			Stuff
		</SettingsModal>
	)
}

const css = {
	container: {},
	modal: {},
}

export default styles(css, EmojiDialog)