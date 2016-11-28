/**
 * Created by Scott on 11/14/2016.
 */
import React from 'react'
import {styles} from 'refire-app'
import {Table} from 'elemental'
import {replaceEmojis} from '../utils'
import emojis from 'emojilib'
import SettingsModal from '../Admin/SettingsModal'

const EmojiDialog = ({visible, hide, save, styles}) => {

  return (
    <SettingsModal
      title="Emoji List"
      visible={visible}
      hide={hide}
      save={save}
      saveText="Choose"
      width="medium"
      styles={styles}
    >
      <Table>
        <thead>
        <tr>
          <th>Available Emojis</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td onClick={save}>
            {replaceEmojis(":grinning:")}grinning
            {replaceEmojis(":kissing:")}kissing
            {replaceEmojis(":smile:")}smile
            {replaceEmojis(":wink:")}wink
            {replaceEmojis(":blush:")}blush
            {replaceEmojis(":frowning:")}frowning
            {replaceEmojis(":cry:")}cry
            {replaceEmojis(":angry:")}angry
            {replaceEmojis(":rage:")}rage
            {replaceEmojis(":poop:")}poop
          </td>
        </tr>
        <tr>
          <td>
            {replaceEmojis(":laughing:")}laughing
            {replaceEmojis(":kissing_heart:")}kissing_heart
            {replaceEmojis(":flushed:")}flushed
            {replaceEmojis(":stuck_out_tongue:")}stuck_out_tongue
            {replaceEmojis(":expressionless:")}expressionless
            {replaceEmojis(":sweat:")}sweat
          </td>
        </tr>
        <tr>
          <td>
            {replaceEmojis(":sob:")}sob
            {replaceEmojis(":mask:")}mask
            {replaceEmojis(":joy:")}joy
            {replaceEmojis(":sleeping:")}sleeping
          </td>
        </tr>
        </tbody>
      </Table>
    </SettingsModal>
  )
}

const css = {
  container: {},
  modal: {},
  tableHead: {
    width: "100%"
  },
}

export default styles(css, EmojiDialog)