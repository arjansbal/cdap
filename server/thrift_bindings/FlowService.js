//
// Autogenerated by Thrift Compiler (0.7.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = require('./flowservices_types');
//HELPER FUNCTIONS AND STRUCTURES

var FlowService_start_args = function(args) {
  this.token = null;
  this.descriptor = null;
  if (args) {
    if (args.token !== undefined) {
      this.token = args.token;
    }
    if (args.descriptor !== undefined) {
      this.descriptor = args.descriptor;
    }
  }
};
FlowService_start_args.prototype = {};
FlowService_start_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.token = new ttypes.DelegationToken();
        this.token.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.descriptor = new ttypes.FlowDescriptor();
        this.descriptor.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_start_args.prototype.write = function(output) {
  output.writeStructBegin('FlowService_start_args');
  if (this.token) {
    output.writeFieldBegin('token', Thrift.Type.STRUCT, 1);
    this.token.write(output);
    output.writeFieldEnd();
  }
  if (this.descriptor) {
    output.writeFieldBegin('descriptor', Thrift.Type.STRUCT, 2);
    this.descriptor.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowService_start_result = function(args) {
  this.success = null;
  this.e = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
  }
};
FlowService_start_result.prototype = {};
FlowService_start_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.RunIdentifier();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.FlowServiceException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_start_result.prototype.write = function(output) {
  output.writeStructBegin('FlowService_start_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowService_status_args = function(args) {
  this.token = null;
  this.identifier = null;
  if (args) {
    if (args.token !== undefined) {
      this.token = args.token;
    }
    if (args.identifier !== undefined) {
      this.identifier = args.identifier;
    }
  }
};
FlowService_status_args.prototype = {};
FlowService_status_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.token = new ttypes.DelegationToken();
        this.token.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.identifier = new ttypes.FlowIdentifier();
        this.identifier.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_status_args.prototype.write = function(output) {
  output.writeStructBegin('FlowService_status_args');
  if (this.token) {
    output.writeFieldBegin('token', Thrift.Type.STRUCT, 1);
    this.token.write(output);
    output.writeFieldEnd();
  }
  if (this.identifier) {
    output.writeFieldBegin('identifier', Thrift.Type.STRUCT, 2);
    this.identifier.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowService_status_result = function(args) {
  this.success = null;
  this.e = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
  }
};
FlowService_status_result.prototype = {};
FlowService_status_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.FlowStatus();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.FlowServiceException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_status_result.prototype.write = function(output) {
  output.writeStructBegin('FlowService_status_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowService_stop_args = function(args) {
  this.token = null;
  this.identifier = null;
  if (args) {
    if (args.token !== undefined) {
      this.token = args.token;
    }
    if (args.identifier !== undefined) {
      this.identifier = args.identifier;
    }
  }
};
FlowService_stop_args.prototype = {};
FlowService_stop_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.token = new ttypes.DelegationToken();
        this.token.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.identifier = new ttypes.FlowIdentifier();
        this.identifier.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_stop_args.prototype.write = function(output) {
  output.writeStructBegin('FlowService_stop_args');
  if (this.token) {
    output.writeFieldBegin('token', Thrift.Type.STRUCT, 1);
    this.token.write(output);
    output.writeFieldEnd();
  }
  if (this.identifier) {
    output.writeFieldBegin('identifier', Thrift.Type.STRUCT, 2);
    this.identifier.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowService_stop_result = function(args) {
  this.success = null;
  this.e = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
  }
};
FlowService_stop_result.prototype = {};
FlowService_stop_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.RunIdentifier();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.FlowServiceException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_stop_result.prototype.write = function(output) {
  output.writeStructBegin('FlowService_stop_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowService_setInstances_args = function(args) {
  this.token = null;
  this.identifier = null;
  this.flowletId = null;
  this.instances = null;
  if (args) {
    if (args.token !== undefined) {
      this.token = args.token;
    }
    if (args.identifier !== undefined) {
      this.identifier = args.identifier;
    }
    if (args.flowletId !== undefined) {
      this.flowletId = args.flowletId;
    }
    if (args.instances !== undefined) {
      this.instances = args.instances;
    }
  }
};
FlowService_setInstances_args.prototype = {};
FlowService_setInstances_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.token = new ttypes.DelegationToken();
        this.token.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.identifier = new ttypes.FlowIdentifier();
        this.identifier.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.flowletId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I16) {
        this.instances = input.readI16();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_setInstances_args.prototype.write = function(output) {
  output.writeStructBegin('FlowService_setInstances_args');
  if (this.token) {
    output.writeFieldBegin('token', Thrift.Type.STRUCT, 1);
    this.token.write(output);
    output.writeFieldEnd();
  }
  if (this.identifier) {
    output.writeFieldBegin('identifier', Thrift.Type.STRUCT, 2);
    this.identifier.write(output);
    output.writeFieldEnd();
  }
  if (this.flowletId) {
    output.writeFieldBegin('flowletId', Thrift.Type.STRING, 3);
    output.writeString(this.flowletId);
    output.writeFieldEnd();
  }
  if (this.instances) {
    output.writeFieldBegin('instances', Thrift.Type.I16, 4);
    output.writeI16(this.instances);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowService_setInstances_result = function(args) {
  this.e = null;
  if (args) {
    if (args.e !== undefined) {
      this.e = args.e;
    }
  }
};
FlowService_setInstances_result.prototype = {};
FlowService_setInstances_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.FlowServiceException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_setInstances_result.prototype.write = function(output) {
  output.writeStructBegin('FlowService_setInstances_result');
  if (this.e) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowService_getFlows_args = function(args) {
  this.accountId = null;
  if (args) {
    if (args.accountId !== undefined) {
      this.accountId = args.accountId;
    }
  }
};
FlowService_getFlows_args.prototype = {};
FlowService_getFlows_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.accountId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_getFlows_args.prototype.write = function(output) {
  output.writeStructBegin('FlowService_getFlows_args');
  if (this.accountId) {
    output.writeFieldBegin('accountId', Thrift.Type.STRING, 1);
    output.writeString(this.accountId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowService_getFlows_result = function(args) {
  this.success = null;
  this.e = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
  }
};
FlowService_getFlows_result.prototype = {};
FlowService_getFlows_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size16 = 0;
        var _rtmp320;
        this.success = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = new ttypes.ActiveFlow();
          elem22.read(input);
          this.success.push(elem22);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.FlowServiceException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_getFlows_result.prototype.write = function(output) {
  output.writeStructBegin('FlowService_getFlows_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter23 in this.success)
    {
      if (this.success.hasOwnProperty(iter23))
      {
        iter23 = this.success[iter23];
        iter23.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.e) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowService_getFlowDefinition_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
FlowService_getFlowDefinition_args.prototype = {};
FlowService_getFlowDefinition_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.id = new ttypes.FlowIdentifier();
        this.id.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_getFlowDefinition_args.prototype.write = function(output) {
  output.writeStructBegin('FlowService_getFlowDefinition_args');
  if (this.id) {
    output.writeFieldBegin('id', Thrift.Type.STRUCT, 1);
    this.id.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowService_getFlowDefinition_result = function(args) {
  this.success = null;
  this.e = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.e !== undefined) {
      this.e = args.e;
    }
  }
};
FlowService_getFlowDefinition_result.prototype = {};
FlowService_getFlowDefinition_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.FlowServiceException();
        this.e.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_getFlowDefinition_result.prototype.write = function(output) {
  output.writeStructBegin('FlowService_getFlowDefinition_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.e) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowService_getFlowHistory_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
  }
};
FlowService_getFlowHistory_args.prototype = {};
FlowService_getFlowHistory_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.id = new ttypes.FlowIdentifier();
        this.id.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_getFlowHistory_args.prototype.write = function(output) {
  output.writeStructBegin('FlowService_getFlowHistory_args');
  if (this.id) {
    output.writeFieldBegin('id', Thrift.Type.STRUCT, 1);
    this.id.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowService_getFlowHistory_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
FlowService_getFlowHistory_result.prototype = {};
FlowService_getFlowHistory_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size24 = 0;
        var _rtmp328;
        this.success = [];
        var _etype27 = 0;
        _rtmp328 = input.readListBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = new ttypes.FlowRunRecord();
          elem30.read(input);
          this.success.push(elem30);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FlowService_getFlowHistory_result.prototype.write = function(output) {
  output.writeStructBegin('FlowService_getFlowHistory_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter31 in this.success)
    {
      if (this.success.hasOwnProperty(iter31))
      {
        iter31 = this.success[iter31];
        iter31.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FlowServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
FlowServiceClient.prototype = {};
FlowServiceClient.prototype.start = function(token, descriptor, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_start(token, descriptor);
};

FlowServiceClient.prototype.send_start = function(token, descriptor) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('start', Thrift.MessageType.CALL, this.seqid);
  var args = new FlowService_start_args();
  args.token = token;
  args.descriptor = descriptor;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

FlowServiceClient.prototype.recv_start = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new FlowService_start_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('start failed: unknown result');
};
FlowServiceClient.prototype.status = function(token, identifier, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_status(token, identifier);
};

FlowServiceClient.prototype.send_status = function(token, identifier) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('status', Thrift.MessageType.CALL, this.seqid);
  var args = new FlowService_status_args();
  args.token = token;
  args.identifier = identifier;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

FlowServiceClient.prototype.recv_status = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new FlowService_status_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('status failed: unknown result');
};
FlowServiceClient.prototype.stop = function(token, identifier, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_stop(token, identifier);
};

FlowServiceClient.prototype.send_stop = function(token, identifier) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('stop', Thrift.MessageType.CALL, this.seqid);
  var args = new FlowService_stop_args();
  args.token = token;
  args.identifier = identifier;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

FlowServiceClient.prototype.recv_stop = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new FlowService_stop_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('stop failed: unknown result');
};
FlowServiceClient.prototype.setInstances = function(token, identifier, flowletId, instances, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_setInstances(token, identifier, flowletId, instances);
};

FlowServiceClient.prototype.send_setInstances = function(token, identifier, flowletId, instances) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('setInstances', Thrift.MessageType.CALL, this.seqid);
  var args = new FlowService_setInstances_args();
  args.token = token;
  args.identifier = identifier;
  args.flowletId = flowletId;
  args.instances = instances;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

FlowServiceClient.prototype.recv_setInstances = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new FlowService_setInstances_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  callback(null)
};
FlowServiceClient.prototype.getFlows = function(accountId, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getFlows(accountId);
};

FlowServiceClient.prototype.send_getFlows = function(accountId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getFlows', Thrift.MessageType.CALL, this.seqid);
  var args = new FlowService_getFlows_args();
  args.accountId = accountId;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

FlowServiceClient.prototype.recv_getFlows = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new FlowService_getFlows_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getFlows failed: unknown result');
};
FlowServiceClient.prototype.getFlowDefinition = function(id, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getFlowDefinition(id);
};

FlowServiceClient.prototype.send_getFlowDefinition = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getFlowDefinition', Thrift.MessageType.CALL, this.seqid);
  var args = new FlowService_getFlowDefinition_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

FlowServiceClient.prototype.recv_getFlowDefinition = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new FlowService_getFlowDefinition_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getFlowDefinition failed: unknown result');
};
FlowServiceClient.prototype.getFlowHistory = function(id, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getFlowHistory(id);
};

FlowServiceClient.prototype.send_getFlowHistory = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getFlowHistory', Thrift.MessageType.CALL, this.seqid);
  var args = new FlowService_getFlowHistory_args();
  args.id = id;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

FlowServiceClient.prototype.recv_getFlowHistory = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new FlowService_getFlowHistory_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getFlowHistory failed: unknown result');
};
var FlowServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
FlowServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

FlowServiceProcessor.prototype.process_start = function(seqid, input, output) {
  var args = new FlowService_start_args();
  args.read(input);
  input.readMessageEnd();
  var result = new FlowService_start_result();
  this._handler.start(args.token, args.descriptor, function (success) {
    result.success = success;
    output.writeMessageBegin("start", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

FlowServiceProcessor.prototype.process_status = function(seqid, input, output) {
  var args = new FlowService_status_args();
  args.read(input);
  input.readMessageEnd();
  var result = new FlowService_status_result();
  this._handler.status(args.token, args.identifier, function (success) {
    result.success = success;
    output.writeMessageBegin("status", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

FlowServiceProcessor.prototype.process_stop = function(seqid, input, output) {
  var args = new FlowService_stop_args();
  args.read(input);
  input.readMessageEnd();
  var result = new FlowService_stop_result();
  this._handler.stop(args.token, args.identifier, function (success) {
    result.success = success;
    output.writeMessageBegin("stop", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

FlowServiceProcessor.prototype.process_setInstances = function(seqid, input, output) {
  var args = new FlowService_setInstances_args();
  args.read(input);
  input.readMessageEnd();
  var result = new FlowService_setInstances_result();
  this._handler.setInstances(args.token, args.identifier, args.flowletId, args.instances, function (success) {
    result.success = success;
    output.writeMessageBegin("setInstances", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

FlowServiceProcessor.prototype.process_getFlows = function(seqid, input, output) {
  var args = new FlowService_getFlows_args();
  args.read(input);
  input.readMessageEnd();
  var result = new FlowService_getFlows_result();
  this._handler.getFlows(args.accountId, function (success) {
    result.success = success;
    output.writeMessageBegin("getFlows", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

FlowServiceProcessor.prototype.process_getFlowDefinition = function(seqid, input, output) {
  var args = new FlowService_getFlowDefinition_args();
  args.read(input);
  input.readMessageEnd();
  var result = new FlowService_getFlowDefinition_result();
  this._handler.getFlowDefinition(args.id, function (success) {
    result.success = success;
    output.writeMessageBegin("getFlowDefinition", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

FlowServiceProcessor.prototype.process_getFlowHistory = function(seqid, input, output) {
  var args = new FlowService_getFlowHistory_args();
  args.read(input);
  input.readMessageEnd();
  var result = new FlowService_getFlowHistory_result();
  this._handler.getFlowHistory(args.id, function (success) {
    result.success = success;
    output.writeMessageBegin("getFlowHistory", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

