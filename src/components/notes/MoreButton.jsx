import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { useI18n } from 'twake-i18n'

import Button from 'cozy-ui/transpiled/react/Buttons'
import Icon from 'cozy-ui/transpiled/react/Icon'
import DotsIcon from 'cozy-ui/transpiled/react/Icons/Dots'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'

export const MoreButton = forwardRef(({ disabled, onClick, ...props }, ref) => {
  const { t } = useI18n()
  const { isMobile } = useBreakpoints()

  return (
    <Button
      className={cx('u-miw-auto', { 'u-ml-half': !isMobile })}
      variant="secondary"
      disabled={disabled}
      onClick={onClick}
      label={<Icon icon={DotsIcon} />}
      aria-label={t('MoreButton.more')}
      ref={ref}
      {...props}
    />
  )
})

MoreButton.displayName = 'MoreButton'

MoreButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}
