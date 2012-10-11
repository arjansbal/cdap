//
// Autogenerated by Thrift Compiler (0.7.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = require('./metricsservice_types');
//HELPER FUNCTIONS AND STRUCTURES

var MetricsFrontendService_getCounters_args = function(args) {
  this.request = null;
  if (args) {
    if (args.request !== undefined) {
      this.request = args.request;
    }
  }
};
MetricsFrontendService_getCounters_args.prototype = {};
MetricsFrontendService_getCounters_args.prototype.read = function(input) {
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
        this.request = new ttypes.CounterRequest();
        this.request.read(input);
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

MetricsFrontendService_getCounters_args.prototype.write = function(output) {
  output.writeStructBegin('MetricsFrontendService_getCounters_args');
  if (this.request) {
    output.writeFieldBegin('request', Thrift.Type.STRUCT, 1);
    this.request.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MetricsFrontendService_getCounters_result = function(args) {
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
MetricsFrontendService_getCounters_result.prototype = {};
MetricsFrontendService_getCounters_result.prototype.read = function(input) {
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
        var _size44 = 0;
        var _rtmp348;
        this.success = [];
        var _etype47 = 0;
        _rtmp348 = input.readListBegin();
        _etype47 = _rtmp348.etype;
        _size44 = _rtmp348.size;
        for (var _i49 = 0; _i49 < _size44; ++_i49)
        {
          var elem50 = null;
          elem50 = new ttypes.Counter();
          elem50.read(input);
          this.success.push(elem50);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.MetricsServiceException();
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

MetricsFrontendService_getCounters_result.prototype.write = function(output) {
  output.writeStructBegin('MetricsFrontendService_getCounters_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter51 in this.success)
    {
      if (this.success.hasOwnProperty(iter51))
      {
        iter51 = this.success[iter51];
        iter51.write(output);
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

var MetricsFrontendService_getTimeSeries_args = function(args) {
  this.request = null;
  if (args) {
    if (args.request !== undefined) {
      this.request = args.request;
    }
  }
};
MetricsFrontendService_getTimeSeries_args.prototype = {};
MetricsFrontendService_getTimeSeries_args.prototype.read = function(input) {
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
        this.request = new ttypes.TimeseriesRequest();
        this.request.read(input);
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

MetricsFrontendService_getTimeSeries_args.prototype.write = function(output) {
  output.writeStructBegin('MetricsFrontendService_getTimeSeries_args');
  if (this.request) {
    output.writeFieldBegin('request', Thrift.Type.STRUCT, 1);
    this.request.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var MetricsFrontendService_getTimeSeries_result = function(args) {
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
MetricsFrontendService_getTimeSeries_result.prototype = {};
MetricsFrontendService_getTimeSeries_result.prototype.read = function(input) {
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
        this.success = new ttypes.DataPoints();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new ttypes.MetricsServiceException();
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

MetricsFrontendService_getTimeSeries_result.prototype.write = function(output) {
  output.writeStructBegin('MetricsFrontendService_getTimeSeries_result');
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

var MetricsFrontendServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
MetricsFrontendServiceClient.prototype = {};
MetricsFrontendServiceClient.prototype.getCounters = function(request, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getCounters(request);
};

MetricsFrontendServiceClient.prototype.send_getCounters = function(request) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getCounters', Thrift.MessageType.CALL, this.seqid);
  var args = new MetricsFrontendService_getCounters_args();
  args.request = request;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MetricsFrontendServiceClient.prototype.recv_getCounters = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MetricsFrontendService_getCounters_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getCounters failed: unknown result');
};
MetricsFrontendServiceClient.prototype.getTimeSeries = function(request, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getTimeSeries(request);
};

MetricsFrontendServiceClient.prototype.send_getTimeSeries = function(request) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getTimeSeries', Thrift.MessageType.CALL, this.seqid);
  var args = new MetricsFrontendService_getTimeSeries_args();
  args.request = request;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

MetricsFrontendServiceClient.prototype.recv_getTimeSeries = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new MetricsFrontendService_getTimeSeries_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.e) {
    return callback(result.e);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getTimeSeries failed: unknown result');
};
var MetricsFrontendServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
MetricsFrontendServiceProcessor.prototype.process = function(input, output) {
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

MetricsFrontendServiceProcessor.prototype.process_getCounters = function(seqid, input, output) {
  var args = new MetricsFrontendService_getCounters_args();
  args.read(input);
  input.readMessageEnd();
  var result = new MetricsFrontendService_getCounters_result();
  this._handler.getCounters(args.request, function (success) {
    result.success = success;
    output.writeMessageBegin("getCounters", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

MetricsFrontendServiceProcessor.prototype.process_getTimeSeries = function(seqid, input, output) {
  var args = new MetricsFrontendService_getTimeSeries_args();
  args.read(input);
  input.readMessageEnd();
  var result = new MetricsFrontendService_getTimeSeries_result();
  this._handler.getTimeSeries(args.request, function (success) {
    result.success = success;
    output.writeMessageBegin("getTimeSeries", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

