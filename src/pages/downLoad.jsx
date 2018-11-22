import React, { Component } from "react";
// import PropTypes from "prop-types";
import jpg from "../assets/avt.jpg";
import video from "../assets/1.mp4";
import xls from "../assets/sichuan.xls";
export default class Download extends Component {
  constructor(props) {
    super(props);
    this.name='downLoad'
  }

  windowOpen = () => {
    // window.open(jpg);
    // window.open(xls);
    window.open(video);
  };
  //form
  formSubmit = () => {
    let form = document.createElement("form");
    form.method = "get";
    form.action = xls;
    //form.action = xls;
    //form.target = '_blank';	// form新开页面
    document.body.appendChild(form); // form表单做出提交操作要先加入到dom树中
    form.submit();
    document.body.removeChild(form);
  };

  // 使用a标签
  aDownload = () => {
    const a = document.createElement("a");
    // a.href = jpg;
    a.href = jpg;
    //a.download = 'gakki.jpg';
    a.click();
  };

  // 点击上传文档
  handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept =
      "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"; // word文件对应的MIME类型
    input.onchange = e => {
      const file = e.target.files[0] // files[0]也行.items(0)
      console.log(file);
      // 检查文档格式
      if (!this.checkDocument(file)) {
        e.target.value = "";
        return;
      }
      // 上传文档
      this.uploadDocument(file);
    };
    input.click();
  };

  // 文档检查
  checkDocument = file => {
    const accept = [".doc", ".docx"];
    const index = file.name.lastIndexOf(".");
    if (
      index < 0 ||
      accept.indexOf(file.name.substr(index).toLowerCase()) < 0
    ) {
      // 检查文件类型
      console.log("暂不支持该文件格式");
      return false;
    }
    if (file.size > 2 * 1024 * 1024) {
      // 检查文件大小
      console.log("文档大于2MB，上传失败");
      return false;
    }
    return true;
  };

  // 上传文档
  uploadDocument = file => {
    const index = file.name.lastIndexOf(".");
    const fileName = file.name.slice(0, index);
    console.log(fileName)
    const formData = new FormData();
    formData.append("file", file);
    // ajax、fetch或axios等方式上传
    //xhr.upload.onprogress = ev => console.log((ev.loaded / ev.total) * 100)
    //  xhr.abort()  取消上传
    //axios
    // onUploadProgress(ev) => {
    //     length = Math.round((ev.loaded / ev.total) * 100);
    //     console.log(length);
    // }
    /**
 *  let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    axios.get(url, {
    cancelToken: source.token
    })
    source.cancel();//取消请求
 */
  };

  // 拖拽上传
  handleDrop = e => {
    e.preventDefault()
    const file = e.dataTransfer.files[0];
    console.log(file)
    if (e.dataTransfer.files.length > 1) {
     console.log("仅支持上传一个word文件");
      return;
    }
    if (!this.checkDocument(file)) {
      // 上传失败直接退出
      e.target.value = "";
      return;
    }
    this.uploadDocument(file); // 上传文件
  };
  preventDefault=(e)=>{
    // e.stopPropagation();
    e.preventDefault()
  }
  render() {
    const style1={
      width:'600px',
      height:'300px',
      margin:'50px auto',
    }
    const style2={
      width:'200px',
      height:'100px',
      border:'1px solid #000',
      marginTop:'120px',
      marginLeft:'200px'
    }
    return (
      <div style={style1}> 
        <button onClick={this.windowOpen}>window.open</button>
        <button onClick={this.formSubmit}>formSubmit</button>
        <button onClick={this.aDownload}>aDownload</button>
        <button onClick={this.handleClick}>uploadFile</button>
        <div
            style={style2}
            onDragOver={this.preventDefault}
            onDragEnter={this.preventDefault}
            onDrop={this.handleDrop}
            >
            {/* {this.renderBtnByUpload(this.state.uploadStatus)} // 根据上传状态决定是"上传文件"还是"取消上传" */}
        </div>

      </div>
    );
  }
}
