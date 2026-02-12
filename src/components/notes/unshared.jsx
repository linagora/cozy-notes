import React from 'react'
import { translate } from 'twake-i18n'

import { Empty } from 'cozy-ui/transpiled/react'

const Unshared = translate()(({ t }) => (
  <Empty
    icon="unlink"
    title={t(`Error.unshared_title`)}
    text={t(`Error.unshared_text`)}
  />
))

export default Unshared
