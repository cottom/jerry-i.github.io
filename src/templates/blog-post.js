import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'
import TagLine from '../components/TagLine'
import StyleLink from '../components/StyleLink'
import Tag from '../components/Tag'

const Wrapper = styled.section`

`

const PostTitle = styled.h1`

`

const PostDes = styled.p`
  font-size: ${rhythm(0.2)};
`
const PostHtml = styled.div`

`

const ToolContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${rhythm(0.5)}
`

const ToolItem = styled.div`

`
const NoMoreLink = styled.span`
  color: #ddd;
`

const NextPreLabel = styled.span`
  color: #999;
  margin-right: ${rhythm(0.2)}
`

const DateIcon = styled.i`
  margin-right: ${rhythm(0.1)}
`
const LabelsContainer = styled.span`
  margin-left: ${rhythm(0.3)};
`

const CategoryContainer = styled.span`

`
export default function BlogPostTemplate({pathContext}) {
  const { previous, next, post } = pathContext
  const { html, frontmatter: {date, tags, title, category, excerpt}  } = post.node
  return (
    <Wrapper>
    <Helmet
        title={`${title} - Cottom's Blog`}
        meta={[
          {
            name: 'description',
            content: excerpt,
          },
          {
            name: 'og:description',
            content: excerpt,
          }]} />
      <PostTitle>{title}</PostTitle>
      <PostDes>
        <DateIcon className={'cottom-iconfont cottom-icon-calendar2'}></DateIcon>{date}
        {
          tags && tags.length && <LabelsContainer>标签：{tags.map((item, index) => <StyleLink key={index} to={`/tag/${item}`}>{item},</StyleLink>)}</LabelsContainer>
        }
        {
          category && <CategoryContainer>分类：<StyleLink to={`/category/${category}`}>{category}</StyleLink></CategoryContainer>
        }
      </PostDes>
      <PostHtml dangerouslySetInnerHTML={{ __html: html }} />
      <hr/>
      <ToolContainer>
        <ToolItem>
          <NextPreLabel>Previous:</NextPreLabel>
          {
            previous ? <StyleLink to={previous.path}>{previous.title}</StyleLink> : <NoMoreLink>no more</NoMoreLink>
          }
        </ToolItem>
        <ToolItem>
          <NextPreLabel>Next:</NextPreLabel>
          {
            next ? <StyleLink to={next.path}>{next.title}</StyleLink> : <NoMoreLink>no more</NoMoreLink>
          }
        </ToolItem>
      </ToolContainer>
    </Wrapper>
  )
}
