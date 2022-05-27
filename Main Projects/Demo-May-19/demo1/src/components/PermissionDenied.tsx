import React from 'react'
import { useTranslation } from 'react-i18next';

function PermissionDenied() {
  const { t } = useTranslation()
  return (
    <div>{t('denied')}</div>
  )
}

export default PermissionDenied;