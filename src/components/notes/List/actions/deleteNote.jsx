import { Icon, Trash } from '@linagora/twake-icons'
import React, { forwardRef } from 'react'

import ActionsMenuItem from 'cozy-ui/transpiled/react/ActionsMenu/ActionsMenuItem'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'

const makeComponent = (label, icon) => {
  const Component = forwardRef((props, ref) => {
    return (
      <ActionsMenuItem {...props} ref={ref}>
        <ListItemIcon>
          <Icon icon={icon} />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ActionsMenuItem>
    )
  })
  Component.displayName = 'DeleteNote'

  return Component
}

export const deleteNote = ({ t, onDeleteNote }) => {
  const label = t('Notes.Delete.delete_note')
  const icon = Trash

  return {
    name: 'deleteNote',
    label,
    icon,
    action: data => {
      onDeleteNote(data[0])
    },
    Component: makeComponent(label, icon)
  }
}
