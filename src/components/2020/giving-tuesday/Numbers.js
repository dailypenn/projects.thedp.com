import React from 'react'
import s from 'styled-components'

import { Header, PINK, BLACK } from './shared'
import { RowWithPadding } from '../../shared'

const Numbers = () => (
  <>
    <Header title="by the numbers" subtitle="always the dp" titleColor={PINK} subColor={BLACK} />

    <div style={{ justifyContent: 'center' }}>
      donate
    </div>
  </>
)

export default Numbers