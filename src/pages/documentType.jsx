/*
 * @Author: CRPER
 * @LastEditors: CRPER
 * @Github: https://github.com/crper
 * @Motto: 折腾是一种乐趣，求知是一种追求。不懂就学,懂则分享。
 * @Description: 文档类型维护
 */
import React, { PureComponent } from 'react';
import { Tag, Input, Tooltip, Icon, message } from 'antd';

// 对象深比较
import isEqual from 'lodash/isEqual';

export default class DocumentType extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (isEqual(nextProps.data, prevState.prevData)) {
      return null;
    }
    if (nextProps.data) {
      return {
        defaultValue: nextProps.defaultValue ? nextProps.defaultValue : null,
        tags: nextProps.data,
        prevData: nextProps.data,
      };
    } else {
      return null;
    }
  }
  state = {
    tags: [], // 标签列表
    hightlightIndeX: 0, // 若是外部没有
    inputVisible: false, // 输入框默认隐藏
    inputValue: '', // 输入框默认值
  };

  //获取默认值
  initDefaultValue = () => {
    const { defaultValue, hightlightIndeX, tags } = this.state;
    // 若是有,则取遍历取得;若是外部没有传入默认值则取数组第一位
    if (defaultValue) {
      let index = tags.indexOf(defaultValue);
      // 若是传入的默认值不存在,则默认取下标为0的
      index = index === -1 ? 0 : index;
      this.setState({ hightlightIndeX: index }, () => {
        this.props.onChange(this.getTagValueFromIndex(index));
      });
    } else {
      this.props.onChange(this.getTagValueFromIndex(hightlightIndeX));
    }
  };

  componentDidMount = () => {
    this.initDefaultValue();
  };

  // 显示input后,直接聚焦
  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  // 保存input输入的值
  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  // 新增判定
  handleInputConfirm = () => {
    const { inputValue, tags: prevTags, defaultValue } = this.state;

    // 若是输入的值已经存在或空值,则不添加
    if (inputValue === defaultValue) {
      message.error('已存在同样的类型!!!');
      this.setState({ inputValue: '' });
      this.input.focus();
      return false;
    }
    if (!inputValue) {
      this.setState({ inputVisible: false, inputValue: '' });
      return false;
    }

    let tags = prevTags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });

    // 传递给父的新增标签回调
    if (this.props.addTag) {
      this.props.addTag(inputValue);
    }
  };

  // 取得对应index下的tag的值
  getTagValueFromIndex = index => {
    const { tags } = this.state;
    return tags[index];
  };

  // 高亮TAG
  hightlightTag = index => {
    this.setState({ hightlightIndeX: index });
    if (this.props.onChange) {
      this.props.onChange(this.getTagValueFromIndex(index));
    }
  };

  // 删除tag
  handleClose = removeTag => {
    const { hightlightIndeX, tags } = this.state;
    if (this.props.removeTag) {
      this.props.removeTag(removeTag);
    }
    // 若是删除的位置和高亮的位置同一个,则高亮往前一位
    if (tags.indexOf(removeTag) === tags.length - 1) {
      this.hightlightTag(hightlightIndeX - 1);
    }
  };

  // 记录控件的ref
  saveInputRef = input => (this.input = input);

  render() {
    const { tags, inputVisible, inputValue, hightlightIndeX } = this.state;
    const { plusBtnText } = this.props;
    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 10;
          const tagElem = (
            <Tag
              key={tag}
              closable={index !== 0}
              style={hightlightIndeX === index ? { color: '#fff', background: '#108ee9' } : {}}
              onClick={() => this.hightlightTag(index)}
              afterClose={() => this.handleClose(tag)}
            >
              {isLongTag ? `${tag.slice(0, 10)}...` : tag}
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
            <Icon type="plus" /> {plusBtnText ? plusBtnText : 'New Tag'}
          </Tag>
        )}
      </div>
    );
  }
}

