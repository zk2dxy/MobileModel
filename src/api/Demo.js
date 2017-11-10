import ApiUtils from '../utils/api-utils'
import * as hostUrl from './config'
const flowModelApi = {
  getFlowModelList (params, callback, errorCallback) {
    let apiConfig = {
      operName: '获取流程模型列表',
      callback: resData => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.post(hostUrl.WORKFLOW_HOST + 'model/list', params, {}, apiConfig)
  },
  deleteModel (modelId, callback, errorCallback) {
    let apiConfig = {
      operName: '删除流程模型',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    var url = hostUrl.WORKFLOW_HOST + 'model/delete?modelId=' + modelId
    ApiUtils.get(url, {}, apiConfig)
  },
  deployModel (modelId, callback, errorCallback) {
    let apiConfig = {
      operName: '部署流程模型',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    var url = hostUrl.WORKFLOW_HOST + 'model/deploy?modelId=' + modelId
    ApiUtils.get(url, {}, apiConfig)
  },
  loadModelViewImg (modelId, callback, errorCallback) {
    let apiConfig = {
      operName: '加载流程模型图片',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    var url = hostUrl.WORKFLOW_HOST + 'model/diagram?modelId=' + modelId
    ApiUtils.get(url, {}, apiConfig)
  },
  saveModel (params, callback, errorCallback) {
    let apiConfig = {
      operName: '添加并获取模型ID',
      callback: resData => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.post(hostUrl.WORKFLOW_HOST + 'model/add', params, {}, apiConfig)
  },
  getFlowList (params, callback, errorCallback) {
    let apiConfig = {
      operName: '获取我的流程列表',
      callback: resData => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.post(hostUrl.WORKFLOW_HOST + 'processDef/list', params, {}, apiConfig)
  },
  getStartFormKey (defId, callback, errorCallback) {
    let apiConfig = {
      operName: '获取流程表单ID',
      callback: resData => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.get(hostUrl.WORKFLOW_HOST + 'processDef/startFormKey?processDefId=' + defId, {}, apiConfig)
  },
  loadWorkFlowModelList (processName, callback, errorCallback) {
    let apiConfig = {
      operName: '获取工作流程列表',
      callback: resData => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.get(hostUrl.WORKFLOW_HOST + 'actExtendProcess/findList4Class?processName=' + processName, {}, apiConfig)
  },
  flowModelStatusChange (params, callback, errorCallback) {
    let apiConfig = {
      operName: '工作流程状态更新',
      callback: resData => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.post(hostUrl.WORKFLOW_HOST + 'actExtendProcess/update', params, {}, apiConfig)
  },
  saveModelForm (params, callback, errorCallback) {
    let apiConfig = {
      operName: '保存工作流程',
      callback: resData => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    var url = hostUrl.WORKFLOW_HOST + 'actExtendProcess/add'
    if (params.id !== null && params.id !== '') {
      url = hostUrl.WORKFLOW_HOST + 'actExtendProcess/updateAll'
    }
    ApiUtils.post(url, params, {}, apiConfig)
  },
  flowModelClassifyChange (params, callback, errorCallback) {
    let apiConfig = {
      operName: '工作流程分类更新',
      callback: resData => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.post(hostUrl.WORKFLOW_HOST + 'actExtendProcess/update', params, {}, apiConfig)
  },
  flowModelNameChange (params, callback, errorCallback) {
    let apiConfig = {
      operName: '工作流程流程名称更新',
      callback: resData => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.post(hostUrl.WORKFLOW_HOST + 'actExtendProcess/update', params, {}, apiConfig)
  },
  flowModelConfig (params, callback, errorCallback) {
    let apiConfig = {
      operName: '工作流程配置',
      callback: resData => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.post(hostUrl.WORKFLOW_HOST + 'actExtendBytearray/get', params, {}, apiConfig)
  },
  saveFlowModelConfig (data, callback, errorCallback) {
    let apiConfig = {
      operName: '工作流程配置保存',
      callback: resData => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.post(hostUrl.WORKFLOW_HOST + 'actExtendBytearray/save', data, {}, apiConfig)
  },
  changeStatusModel (item, callback, errorCallback) {
    let apiConfig = {
      operName: '改变模型状态',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    let action = ''
    if (item.deptStatus === 'N') {
      action = 'actExtendModel/disableModel'
    } else if (item.deptStatus === 'Y') {
      action = 'actExtendModel/enableModel'
    }
    var url = hostUrl.WORKFLOW_HOST + action + '?processDeptId=' + item.actExtendProcessDeptId
    ApiUtils.get(url, {}, apiConfig)
  },
  getJustData (params, callback, errorCallback) {
    let action = 'actExtendModel/selListByProcessId4Dept'
    let apiConfig = {
      operName: '获取模型配置数据列表',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    var url = hostUrl.WORKFLOW_HOST + action + '?actExtendProcessId=' + params.actExtendProcessId + '&status=' + params.options_status
    ApiUtils.get(url, {}, apiConfig)
  },
  editModelFunc (processDeptId, callback, errorCallback) {
    let action = 'actExtendModel/getOrAddEditModel'
    let apiConfig = {
      operName: '获取模型配置数据',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    var url = hostUrl.WORKFLOW_HOST + action + '?processDeptId=' + processDeptId
    ApiUtils.get(url, {}, apiConfig)
  },
  viewModelFunc (id, callback, errorCallback) {
    let action = 'actExtendModel/get'
    let apiConfig = {
      operName: '查看模型配置数据',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    var url = hostUrl.WORKFLOW_HOST + action + '?id=' + id
    ApiUtils.get(url, {}, apiConfig)
  },
  addNewJustData (params, callback, errorCallback) {
    let action = 'actExtendModel/add'
    let apiConfig = {
      operName: '新增模型表单数据提交',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.post(hostUrl.WORKFLOW_HOST + action, params, {}, apiConfig)
  },
  updateJustData (params, callback, errorCallback) {
    let action = 'actExtendModel/updateExtendModel'
    let apiConfig = {
      operName: '更新模型表单数据提交',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.put(hostUrl.WORKFLOW_HOST + action, params, {}, apiConfig)
  },
  getGroupTree (callback, errorCallback) {
    let action = 'actExtendModel/getDeptTree'
    let apiConfig = {
      operName: '获取组织树数据树形式',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.get(hostUrl.WORKFLOW_HOST + action, {}, apiConfig)
  },
  getGroupTreeList (callback, errorCallback) {
    let action = 'processBusiness/getDeptlist'
    let apiConfig = {
      operName: '获取组织树数据列表形式',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.get(hostUrl.WORKFLOW_HOST + action, {}, apiConfig)
  },
  deleteJustModel (moduleId, callback, errorCallback) {
    let action = 'actExtendModel/deleteModel' + '?id=' + moduleId
    let apiConfig = {
      operName: '删除正在编辑的或者新增的审批配置模型数据',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.get(hostUrl.WORKFLOW_HOST + action, {}, apiConfig)
  },
  publishJustModel (processDeptId, callback, errorCallback) {
    let action = 'actExtendModel/deployModel' + '?processDeptId=' + processDeptId
    let apiConfig = {
      operName: '部署审批配置模型数据',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.get(hostUrl.WORKFLOW_HOST + action, {}, apiConfig)
  },
  getDictionary (dictName, callback, errorCallback) {
    let apiConfig = {
      operName: '获取数据字典',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.get(hostUrl.WORKFLOW_DICT_GET + dictName, {}, apiConfig)
  },
  getModelHistory (processDeptId, callback, errorCallback) {
    let action = 'actExtendModel/getHistoryVersionList' + '?processDeptId=' + processDeptId
    let apiConfig = {
      operName: '获取模型历史数据',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.get(hostUrl.WORKFLOW_HOST + action, {}, apiConfig)
  },
  getJustFormDetail (params, callback, errorCallback) {
    let action = 'processBusiness/getAuditTaskInfo' + '?taskId=' + params.taskId + '&userId=' + params.userId + '&queryCondition=' + params.queryCondition
    let apiConfig = {
      operName: '获取待审数据详情',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.get(hostUrl.WORKFLOW_HOST + action, {}, apiConfig)
  },
  formJustifyActionPass (params, callback, errorCallback) {
    let action = 'processBusiness/audit'
    let apiConfig = {
      operName: '审批操作接口',
      callback: (resData) => callback(resData),
      errorCalback: (resData) => errorCallback(resData)
    }
    ApiUtils.post(hostUrl.WORKFLOW_HOST + action, params, {}, apiConfig)
  }
}
export default flowModelApi
