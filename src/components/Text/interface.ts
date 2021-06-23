import React from 'react'

export interface TitleProps {
  children: React.ReactNode
  variant: 'huge' | 'big' | 'medium' | 'small' | 'tiny'
  textAlign?: 'left' | 'center' | 'right'
}

export interface SubtitleProps {
  children: React.ReactNode
  variant: 'big' | 'medium' | 'small'
  textAlign?: 'left' | 'center' | 'right'
}

export interface BodyProps {
  children: React.ReactNode
  variant: 'big' | 'medium' | 'small'
  textAlign?: 'left' | 'center' | 'right'
}