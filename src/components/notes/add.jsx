import { createNoteDocument, generateReturnUrlToNotesIndex } from 'lib/utils'
import React, { useState, useCallback } from 'react'
import { useI18n } from 'twake-i18n'

import { useClient } from 'cozy-client'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Icon from 'cozy-ui/transpiled/react/Icon'
import IconButton from 'cozy-ui/transpiled/react/IconButton'

export default function Add({ className }) {
  const { t } = useI18n()
  const client = useClient()
  const [isWorking, setIsWorking] = useState(false)
  const handleClick = useCallback(async () => {
    setIsWorking(true)
    const { data: doc } = await createNoteDocument(client)
    window.location.href = await generateReturnUrlToNotesIndex(client, doc)
  }, [client])

  return (
    <Button
      onClick={handleClick}
      type="submit"
      busy={isWorking}
      startIcon={<Icon icon="plus" />}
      label={t('Notes.Add.add_note')}
      className={className}
    />
  )
}

export function AddMobile(props) {
  const client = useClient() || props.client
  return (
    <IconButton
      className="u-c-pointer"
      onClick={async () => {
        const { data: doc } = await createNoteDocument(client)
        window.location.href = await generateReturnUrlToNotesIndex(client, doc)
      }}
    >
      <Icon icon="plus" />
    </IconButton>
  )
}
