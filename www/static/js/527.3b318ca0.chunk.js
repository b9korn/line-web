!function () {
  try {
    var t = "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
      e = (new Error()).stack;
    e &&
      (t._sentryDebugIds = t._sentryDebugIds || {},
        t._sentryDebugIds[e] = "51e37830-8f81-4959-ba97-4fb75d1a848c",
        t._sentryDebugIdIdentifier =
          "sentry-dbid-51e37830-8f81-4959-ba97-4fb75d1a848c");
  } catch (t) {}
}();
var _global = "undefined" !== typeof window
  ? window
  : "undefined" !== typeof global
  ? global
  : "undefined" !== typeof self
  ? self
  : {};
_global.SENTRY_RELEASE = { id: "line-chrome@3.5.1" },
  (() => {
    "use strict";
    const t = new Date("1904-01-01T00:00:00Z").getTime(),
      e = 1e6,
      r = {
        96e3: 0,
        88200: 1,
        64e3: 2,
        48e3: 3,
        44100: 4,
        32e3: 5,
        24e3: 6,
        22050: 7,
        16e3: 8,
        12e3: 9,
        11025: 10,
        8e3: 11,
      };
    var o, s;
    !function (t) {
      t[t.START = 0] = "START",
        t[t.GET_CHANNEL_DATA = .4] = "GET_CHANNEL_DATA",
        t[t.ENCODED = .95] = "ENCODED",
        t[t.DONE = 1] = "DONE";
    }(o || (o = {})),
      function (t) {
        t[t.START = 0] = "START",
          t[t.GET_CHANNEL_DATA = .05] = "GET_CHANNEL_DATA",
          t[t.PARSED = .06] = "PARSED",
          t[t.VIDEO_ENCODED = .9] = "VIDEO_ENCODED",
          t[t.AUDIO_ENCODED = .99] = "AUDIO_ENCODED",
          t[t.DONE = 1] = "DONE";
      }(s || (s = {}));
    var n, i, a, d;
    !function (t) {
      t.UNCONFIGURED = "unconfigured",
        t.CONFIGURED = "configured",
        t.CLOSED = "closed";
    }(n || (n = {})),
      function (t) {
        t[t.ES = 3] = "ES",
          t[t.DECODER_CONFIG = 4] = "DECODER_CONFIG",
          t[t.DECODER_SPECIFIC = 5] = "DECODER_SPECIFIC";
      }(i || (i = {})),
      function (t) {
        t[t.BASE_DATA_OFFSET = 1] = "BASE_DATA_OFFSET",
          t[t.SAMPLE_DESC = 2] = "SAMPLE_DESC",
          t[t.SAMPLE_DUR = 8] = "SAMPLE_DUR",
          t[t.SAMPLE_SIZE = 16] = "SAMPLE_SIZE",
          t[t.SAMPLE_FLAGS = 32] = "SAMPLE_FLAGS";
      }(a || (a = {})),
      function (t) {
        t[t.DATA_OFFSET = 1] = "DATA_OFFSET",
          t[t.FIRST_FLAG = 4] = "FIRST_FLAG",
          t[t.DURATION = 256] = "DURATION",
          t[t.SIZE = 512] = "SIZE",
          t[t.FLAGS = 1024] = "FLAGS",
          t[t.CTS_OFFSET = 2048] = "CTS_OFFSET";
      }(d || (d = {}));
    const c = { avc1: "avcC", avc3: "avcC", hev1: "hvcC", hvc1: "hvcC" },
      f = new TextEncoder(),
      u = new TextDecoder(),
      h = (t) => f.encode(t),
      l = (t) => u.decode(t),
      p = (t) => {
        const e = new Uint8Array(t.byteLength);
        return t.copyTo(e), e;
      },
      m = (t, e) => {
        const r = [];
        let o = t;
        for (let s = 0; s < e; s++) r.unshift(o % 256), o = Math.floor(o / 256);
        return new Uint8Array(r);
      },
      w = (t) => {
        let e = 0;
        for (const r of t) e = e << 8 | r;
        return e;
      },
      y = (t) => {
        const e = w(t);
        return new Int32Array([e])[0];
      },
      E = (t) => {
        let e = 0n;
        for (const r of t) e = 256n * e + BigInt(r);
        return e;
      },
      C = (t, e, r) => t + (e - t) * r,
      S = {},
      g = (t) => t.state === n.CLOSED,
      v = ({ channelDataList: t, sampleRate: e }, r, o) => {
        o?.(0);
        const s = ((t) => {
            if (!t[0]) throw new Error("Empty input");
            const e = t.length, r = t[0].length;
            if (t.some((t) => t.length !== r)) {
              throw new Error("Array length not matched");
            }
            const o = new Float32Array(r);
            for (let s = 0; s < r; s++) {
              let r = 0;
              for (let o = 0; o < e; o++) r += t[o].at(s);
              o.set([r / e], s);
            }
            return o;
          })(t),
          n = new AudioData({
            format: "f32",
            sampleRate: e,
            numberOfChannels: 1,
            numberOfFrames: s.length,
            timestamp: 0,
            data: s,
          });
        o?.(.5);
        const i = [];
        return new Promise(async (t, e) => {
          try {
            const s = new AudioEncoder({ output: (t) => i.push(t), error: e }),
              a = {
                codec: "mp4a.40.2",
                numberOfChannels: 1,
                sampleRate: r.sampleRate,
                bitrate: r.bitRate,
              },
              { supported: d } = await AudioEncoder.isConfigSupported(a);
            if (!d) throw new Error("Not Supported encoder config");
            s.configure(a),
              s.encode(n),
              await s.flush(),
              g(s) || s.close(),
              o?.(1),
              t({
                sampleRate: r.sampleRate,
                bitRate: r.bitRate,
                duration: n.duration,
                chunkList: i,
              });
          } catch (s) {
            e(s);
          }
        });
      },
      A = (t, r, o) => {
        const s = o
          ? ((t, e = 200) => {
            let r = 0;
            return (...o) => {
              Date.now() < r + e || (r = Date.now(), t(...o));
            };
          })(o)
          : () => {};
        let n = null, i = null;
        return new Promise(async (a, d) => {
          try {
            const c = {
                width: 0,
                height: 0,
                bitRate: r.bitRate,
                duration: 0,
                transformMatrix: new Uint8Array(0),
                chunkList: [],
              },
              f = t.getVideoTrackIds()[0];
            if (!f) throw new Error("Video track not found");
            const u = t.getVideoTrackInfo(f),
              h = t.sampleListGenerator(f),
              l = t.getVideoDecoderConfigByTrackId(f),
              p = r.width ?? l.codedWidth,
              m = r.height ?? l.codedHeight;
            c.width = p - p % 2,
              c.height = m - m % 2,
              c.duration = Number(u.duration * BigInt(e) / BigInt(u.timeScale)),
              c.transformMatrix = u.transformMatrix;
            const w = {
                codec: "avc1.64001f",
                framerate: r.frameRate,
                bitrate: r.bitRate,
                width: c.width,
                height: c.height,
              },
              y = 100,
              E = 50,
              C = u.sampleCount;
            let S, g = 0, v = 0, A = 0, b = 0, L = 0, D = 0;
            const { supported: I } = await VideoDecoder.isConfigSupported(l);
            if (!I) throw new Error("Not Supported video decoder config");
            n = new VideoDecoder({
              output: (t) => {
                try {
                  if (w.framerate) {
                    const r = t.timestamp / e;
                    if (Math.ceil(r * w.framerate) < v) {
                      return A++, void t.close();
                    }
                  }
                  v++, i?.encode(t), t.close();
                } catch (r) {
                  d(r);
                }
              },
              error: (t) => {
                L++;
              },
            }), n.configure(l);
            const { supported: T } = await VideoEncoder.isConfigSupported(w);
            if (!T) throw new Error("Not Supported video encoder config");
            i = new VideoEncoder({
              output: (t, e) => {
                try {
                  b++,
                    s((b + A) / C),
                    !c.description &&
                    e.decoderConfig?.description instanceof ArrayBuffer &&
                    (c.description = new Uint8Array(
                      e.decoderConfig.description,
                    )),
                    c.chunkList.push(t),
                    S && v - b <= E && (S(), S = void 0);
                } catch (r) {
                  d(r);
                }
              },
              error: (t) => {
                D++, S && (S(), S = void 0);
              },
            }), i.configure(w);
            for (const t of h) {
              if (L) throw new Error("Decode Error");
              if (D) throw new Error("Encode Error");
              const r = t.isSync ? "key" : "delta",
                o = t.cts / t.timeScale,
                s = new EncodedVideoChunk({
                  type: r,
                  timestamp: o * e,
                  duration: t.duration * e / t.timeScale,
                  data: await t.data.arrayBuffer(),
                });
              if (n.decode(s), g++, g - (b + A) >= y) {
                const t = new Promise((t) => {
                  S = t;
                });
                await t;
              }
            }
            if (await (n?.flush()), await (i?.flush()), L) {
              throw new Error("Decode Error");
            }
            if (D) throw new Error("Encode Error");
            o?.(1), a(c);
          } catch (c) {
            d(c);
          }
        }).finally(() =>
          (() => {
            try {
              n && (g(n) || n.close(), n = null),
                i && (g(i) || i.close(), i = null);
            } catch (t) {}
          })()
        );
      },
      b = (t, { sampleRate: e, bitRate: r, duration: o, chunkList: s }) => {
        const n = s.reduce((t, e) => t + e.byteLength, 0);
        return {
          id: t,
          type: "audio",
          duration: o,
          bitRate: r,
          sampleRate: e,
          channelCount: 1,
          data: s,
          dataByteLength: n,
        };
      },
      L = async (t, e, r) => new Uint8Array(await t.slice(e, r).arrayBuffer()),
      D = (t) => {
        if ("childBoxList" in t) {
          return t.childBoxList.find((e) => e.type === c[t.type]);
        }
      };
    class I {
      #t;
      #e = 0;
      constructor(t) {
        this.#t = t;
      }
      read(t) {
        const e = this.#t.slice(this.#e, this.#e + t);
        return this.#e += t, e;
      }
      readAll() {
        const t = this.#t.slice(this.#e);
        return this.#e = this.#t.length, t;
      }
      isReadDone() {
        return this.#e >= this.#t.length;
      }
      getCursor() {
        return this.#e;
      }
      moveCursor(t) {
        this.#e += t;
      }
    }
    const T = (t, e, r, o) => {
        const s = r - e.length, n = new I(e);
        n.moveCursor(8), n.moveCursor(8);
        const i = w(n.read(2)), a = w(n.read(2));
        n.moveCursor(4);
        const d = w(n.read(2));
        n.moveCursor(2);
        const c = o + s + n.getCursor();
        return {
          type: t,
          parsed: !0,
          size: r,
          offset: o,
          channelCount: i,
          sampleSize: a,
          sampleRate: d,
          childBoxList: O(n.readAll(), c),
        };
      },
      R = (t, e, r, o) => {
        const s = r - e.length, n = new I(e);
        n.moveCursor(8), n.moveCursor(16);
        const i = w(n.read(2)), a = w(n.read(2));
        n.moveCursor(4), n.moveCursor(4), n.moveCursor(4), n.moveCursor(2);
        const d = Math.min(31, w(n.read(1)));
        n.moveCursor(Math.max(31, d)), n.moveCursor(2), n.moveCursor(2);
        const c = o + s + n.getCursor();
        return {
          type: t,
          parsed: !0,
          size: r,
          offset: o,
          childBoxList: O(n.readAll(), c),
          width: i,
          height: a,
        };
      },
      x = {
        ftyp: (t, e, r) => {
          const o = new I(t);
          return {
            type: "ftyp",
            parsed: !0,
            size: e,
            offset: r,
            majorBrand: l(o.read(4)),
            minorVersion: w(o.read(4)),
            compatibleBrands: ((t, e = 4) => {
              const r = [];
              for (let o = 0; o < t.length; o += e) r.push(t.slice(o, o + e));
              return r;
            })(l(o.readAll()), 4),
          };
        },
        moov: (t, e, r) => {
          const o = e - t.length;
          return {
            type: "moov",
            parsed: !0,
            size: e,
            offset: r,
            childBoxList: O(t, r + o),
          };
        },
        mvhd: (t, e, r) => {
          const o = new I(t), s = w(o.read(1));
          o.moveCursor(3),
            0 === s
              ? (o.moveCursor(4), o.moveCursor(4))
              : (o.moveCursor(8), o.moveCursor(8));
          return {
            type: "mvhd",
            parsed: !0,
            size: e,
            offset: r,
            version: s,
            timeScale: w(o.read(4)),
            duration: E(0 === s ? o.read(4) : o.read(8)),
          };
        },
        mvex: (t, e, r) => {
          const o = e - t.length;
          return {
            type: "mvex",
            parsed: !0,
            size: e,
            offset: r,
            childBoxList: O(t, r + o),
          };
        },
        trex: (t, e, r) => {
          const o = new I(t);
          o.moveCursor(1), o.moveCursor(3);
          return {
            type: "trex",
            parsed: !0,
            size: e,
            offset: r,
            trackId: w(o.read(4)),
            defaultSampleDescriptionIndex: w(o.read(4)),
            defaultSampleDuration: w(o.read(4)),
            defaultSampleSize: w(o.read(4)),
            defaultSampleFlags: w(o.read(4)),
          };
        },
        trak: (t, e, r) => {
          const o = e - t.length,
            s = O(t, r + o),
            n = s.find((t) => "tkhd" === t.type && t.parsed);
          if (!n) throw new Error("`tkhd` not found");
          const i = s.find((t) => "mdia" === t.type && t.parsed);
          if (!i) throw new Error("`mdia` not found");
          return {
            type: "trak",
            parsed: !0,
            size: e,
            offset: r,
            childBoxList: s,
            tkhd: n,
            mdia: i,
          };
        },
        tkhd: (t, e, r) => {
          const o = new I(t), s = w(o.read(1));
          o.moveCursor(3),
            0 === s
              ? (o.moveCursor(4), o.moveCursor(4))
              : (o.moveCursor(8), o.moveCursor(8));
          const n = w(o.read(4));
          o.moveCursor(4);
          const i = E(0 === s ? o.read(4) : o.read(8));
          o.moveCursor(8), o.moveCursor(2), o.moveCursor(2);
          const a = w(o.read(2)) >> 8;
          o.moveCursor(2);
          return {
            type: "tkhd",
            parsed: !0,
            size: e,
            offset: r,
            trackId: n,
            duration: i,
            volume: a,
            transformMatrix: o.read(36),
            width: w(o.read(4)) >> 16,
            height: w(o.read(4)) >> 16,
          };
        },
        mdia: (t, e, r) => {
          const o = e - t.length,
            s = O(t, r + o),
            n = s.find((t) => "mdhd" === t.type && t.parsed);
          if (!n) throw new Error("`mdhd` not found");
          const i = s.find((t) => "minf" === t.type && t.parsed);
          if (!i) throw new Error("`minf` not found");
          return {
            type: "mdia",
            parsed: !0,
            size: e,
            offset: r,
            childBoxList: s,
            mdhd: n,
            minf: i,
          };
        },
        mdhd: (t, e, r) => {
          const o = new I(t), s = w(o.read(1));
          o.moveCursor(3),
            0 === s
              ? (o.moveCursor(4), o.moveCursor(4))
              : (o.moveCursor(8), o.moveCursor(8));
          return {
            type: "mdhd",
            parsed: !0,
            size: e,
            offset: r,
            timeScale: w(o.read(4)),
            duration: E(0 === s ? o.read(4) : o.read(8)),
          };
        },
        minf: (t, e, r) => {
          const o = e - t.length,
            s = O(t, r + o),
            n = s.find((t) => "stbl" === t.type && t.parsed);
          if (!n) throw new Error("`stbl` not found");
          return {
            type: "minf",
            parsed: !0,
            size: e,
            offset: r,
            childBoxList: s,
            stbl: n,
          };
        },
        stbl: (t, e, r) => {
          const o = e - t.length,
            s = O(t, r + o),
            n = s.find((t) => "stsd" === t.type && t.parsed);
          if (!n) throw new Error("`stsd` not found");
          const i = s.find((t) => "stts" === t.type && t.parsed);
          if (!i) throw new Error("`stts` not found");
          const a = s.find((t) => "stsc" === t.type && t.parsed);
          if (!a) throw new Error("`stsc` not found");
          const d = s.find((t) => "stsz" === t.type && t.parsed);
          if (!d) throw new Error("`stsz` not found");
          const c = s.find((t) => "stco" === t.type && t.parsed) ??
            s.find((t) => "co64" === t.type && t.parsed);
          if (!c) throw new Error("`stco` not found");
          const f = s.find((t) => "stss" === t.type && t.parsed),
            u = s.find((t) => "ctts" === t.type && t.parsed);
          return {
            type: "stbl",
            parsed: !0,
            size: e,
            offset: r,
            childBoxList: s,
            stsd: n,
            stts: i,
            stsc: a,
            stsz: d,
            stco: c,
            stss: f,
            ctts: u,
          };
        },
        stts: (t, e, r) => {
          const o = new I(t);
          o.moveCursor(1), o.moveCursor(3), o.moveCursor(4);
          const s = [];
          for (; !o.isReadDone();) {
            const t = w(o.read(4)), e = w(o.read(4));
            s.push({ count: t, delta: e });
          }
          return {
            type: "stts",
            parsed: !0,
            size: e,
            offset: r,
            sampleDeltaInfoList: s,
          };
        },
        stss: (t, e, r) => {
          const o = new I(t);
          o.moveCursor(1), o.moveCursor(3), o.moveCursor(4);
          const s = [];
          for (; !o.isReadDone();) s.push(w(o.read(4)));
          return {
            type: "stss",
            parsed: !0,
            size: e,
            offset: r,
            syncSampleIndexList: s,
          };
        },
        stsz: (t, e, r) => {
          const o = new I(t);
          o.moveCursor(1), o.moveCursor(3);
          const s = w(o.read(4)), n = w(o.read(4)), i = [];
          for (let a = 0; a < n; a++) s ? i.push(s) : i.push(w(o.read(4)));
          for (; !o.isReadDone();) i.push(w(o.read(4)));
          return {
            type: "stsz",
            parsed: !0,
            size: e,
            offset: r,
            sampleSizeList: i,
          };
        },
        stsc: (t, e, r) => {
          const o = new I(t);
          o.moveCursor(1), o.moveCursor(3), o.moveCursor(4);
          const s = [];
          for (; !o.isReadDone();) {
            const t = w(o.read(4)), e = w(o.read(4));
            o.moveCursor(4), s.push({ firstChunkIndex: t, sampleCount: e });
          }
          return {
            type: "stsc",
            parsed: !0,
            size: e,
            offset: r,
            sampleToChunkInfoList: s,
          };
        },
        stco: (t, e, r) => {
          const o = new I(t);
          o.moveCursor(1), o.moveCursor(3), o.moveCursor(4);
          const s = [];
          for (; !o.isReadDone();) s.push(w(o.read(4)));
          return {
            type: "stco",
            parsed: !0,
            size: e,
            offset: r,
            chunkOffsetList: s,
          };
        },
        co64: (t, e, r) => {
          const o = new I(t);
          o.moveCursor(1), o.moveCursor(3), o.moveCursor(4);
          const s = [];
          for (; !o.isReadDone();) s.push(Number(E(o.read(8))));
          return {
            type: "co64",
            parsed: !0,
            size: e,
            offset: r,
            chunkOffsetList: s,
          };
        },
        ctts: (t, e, r) => {
          const o = new I(t);
          o.moveCursor(1), o.moveCursor(3), o.moveCursor(4);
          const s = [];
          for (; !o.isReadDone();) {
            const t = w(o.read(4)), e = w(o.read(4));
            s.push({ count: t, offset: e });
          }
          return {
            type: "ctts",
            parsed: !0,
            size: e,
            offset: r,
            sampleOffsetInfoList: s,
          };
        },
        stsd: (t, e, r) => {
          const o = e - t.length, s = new I(t);
          s.moveCursor(1), s.moveCursor(3);
          w(s.read(4));
          const n = r + o + s.getCursor(), i = O(s.readAll(), n);
          return i.length,
            { type: "stsd", parsed: !0, size: e, offset: r, childBoxList: i };
        },
        mp4a: (t, e, r) => T("mp4a", t, e, r),
        "ac-3": (t, e, r) => T("ac-3", t, e, r),
        "ec-3": (t, e, r) => T("ec-3", t, e, r),
        Opus: (t, e, r) => T("Opus", t, e, r),
        esds: (t, e, r) => {
          const o = new I(t);
          o.moveCursor(1), o.moveCursor(3);
          return {
            type: "esds",
            parsed: !0,
            size: e,
            offset: r,
            descriptorList: B(o.readAll()),
          };
        },
        avc1: (t, e, r) => R("avc1", t, e, r),
        avc3: (t, e, r) => R("avc3", t, e, r),
        av01: (t, e, r) => R("av01", t, e, r),
        hev1: (t, e, r) => R("hev1", t, e, r),
        hvc1: (t, e, r) => R("hvc1", t, e, r),
        vp08: (t, e, r) => R("vp08", t, e, r),
        vp09: (t, e, r) => R("vp09", t, e, r),
        avcC: (t, e, r) => {
          const o = new I(t);
          o.moveCursor(1);
          return {
            type: "avcC",
            parsed: !0,
            size: e,
            offset: r,
            codecSuffix: w(o.read(3)).toString(16).padStart(6, "0"),
            body: t,
          };
        },
        hvcC: (t, e, r) => {
          const o = new I(t);
          o.moveCursor(1);
          const s = w(o.read(1)),
            n = s >> 6,
            i = (32 & s) >> 5,
            a = 31 & s,
            d = w(o.read(4)),
            c = o.read(6),
            f = w(o.read(1));
          let u = "";
          const h = { 1: "A", 2: "B", 3: "C" };
          return h[n] && (u += h[n]),
            u += a,
            u += ".",
            u += ((t) => {
              let e = t, r = 0;
              for (let o = 0; o < 32; o++) {r = (r << 1 | 1 & e) >>> 0,
                  e >>= 1;}
              return r;
            })(d).toString(16),
            u += ".",
            u += i ? "H" : "L",
            u += f,
            u += ((t) => {
              let e = "", r = !1;
              for (let o = t.length; o >= 0; o--) {
                (t[o] || r) && (e = "." + t[o].toString(16) + e, r = !0);
              }
              return e;
            })(c),
            {
              type: "hvcC",
              parsed: !0,
              size: e,
              offset: r,
              codecSuffix: u,
              body: t,
            };
        },
        moof: (t, e, r) => {
          const o = e - t.length,
            s = O(t, r + o),
            n = s.filter((t) => "traf" === t.type && t.parsed);
          return {
            type: "moof",
            parsed: !0,
            size: e,
            offset: r,
            childBoxList: s,
            trafList: n,
          };
        },
        traf: (t, e, r) => {
          const o = e - t.length,
            s = O(t, r + o),
            n = s.find((t) => "tfhd" === t.type && t.parsed);
          if (!n) throw new Error("`tfhd` not found");
          const i = s.find((t) => "tfdt" === t.type && t.parsed),
            a = s.filter((t) => "trun" === t.type && t.parsed);
          return {
            type: "traf",
            parsed: !0,
            size: e,
            offset: r,
            childBoxList: s,
            tfhd: n,
            tfdt: i,
            trunList: a,
          };
        },
        tfhd: (t, e, r) => {
          const o = new I(t);
          o.moveCursor(1);
          const s = w(o.read(3));
          return {
            type: "tfhd",
            parsed: !0,
            size: e,
            offset: r,
            trackId: w(o.read(4)),
            baseDataOffset: s & a.BASE_DATA_OFFSET ? E(o.read(8)) : 0n,
            defaultSampleDescriptionIndex: s & a.SAMPLE_DESC ? w(o.read(4)) : 1,
            defaultSampleDuration: s & a.SAMPLE_DUR ? w(o.read(4)) : 0,
            defaultSampleSize: s & a.SAMPLE_SIZE ? w(o.read(4)) : 0,
            defaultSampleFlags: s & a.SAMPLE_FLAGS ? w(o.read(4)) : 0,
          };
        },
        tfdt: (t, e, r) => {
          const o = new I(t), s = w(o.read(1));
          return {
            type: "tfdt",
            parsed: !0,
            size: e,
            offset: r,
            baseMediaDecodeTime: E(1 === s ? o.read(8) : o.read(4)),
          };
        },
        trun: (t, e, r) => {
          const o = new I(t),
            s = w(o.read(1)),
            n = w(o.read(3)),
            i = w(o.read(4)),
            a = n & d.DATA_OFFSET ? w(o.read(4)) : 0,
            c = n & d.FIRST_FLAG ? w(o.read(4)) : 0,
            f = [],
            u = [],
            h = [],
            l = [];
          for (; !o.isReadDone();) {
            n & d.DURATION && f.push(w(o.read(4))),
              n & d.SIZE && u.push(w(o.read(4))),
              n & d.FLAGS && h.push(w(o.read(4))),
              n & d.CTS_OFFSET &&
              (0 === s ? l.push(w(o.read(4))) : l.push(y(o.read(4))));
          }
          return {
            type: "trun",
            parsed: !0,
            size: e,
            offset: r,
            sampleCount: i,
            dataOffset: a,
            firstSampleFlags: c,
            sampleDurationList: f,
            sampleSizeList: u,
            sampleFlagsList: h,
            sampleCompositionTimeOffsetList: l,
          };
        },
      },
      O = (t, e) => {
        const r = new I(t), o = [];
        let s = 8;
        for (; !r.isReadDone();) {
          const n = e + r.getCursor();
          let i = w(r.read(4));
          const a = l(r.read(4));
          if (r.isReadDone()) break;
          if (0 === i) i = t.length - r.getCursor() + 8;
          else if (
            1 === i &&
            (i = Number(E(r.read(8))), s += 8, i >= Number.MAX_SAFE_INTEGER)
          ) throw new Error(`Box size is too large: ${a}, ${i}`);
          if (!a) throw new Error(`Invalid box type: ${a}`);
          const d = x[a];
          if (d) {
            const t = r.read(i - s);
            o.push(d(t, i, n));
          } else {r.moveCursor(i - s),
              o.push({ type: a, parsed: !1, size: i, offset: n });}
        }
        return o;
      },
      k = (t) => {
        let e = 0, r = w(t.read(1));
        if (t.isReadDone()) throw new Error("Failed to read descriptor length");
        for (; 128 & r;) {
          if (e = (127 & r) << 7, r = w(t.read(1)), t.isReadDone()) {
            throw new Error("Failed to read descriptor length");
          }
        }
        return e += 127 & r, e;
      },
      B = (t) => {
        const e = new I(t), r = [];
        for (; !e.isReadDone();) {
          const t = w(e.read(1)), o = k(e), s = e.read(o), n = _[t];
          n ? r.push(n(s)) : r.push({ tag: t, parsed: !1, body: s });
        }
        return r;
      },
      _ = {
        [i.ES]: (t) => {
          const e = new I(t);
          e.moveCursor(2);
          const r = w(e.read(1));
          if (128 & r && e.moveCursor(2), 64 & r) {
            const t = w(e.read(1));
            e.moveCursor(t);
          }
          32 & r && e.moveCursor(2);
          const o = B(e.readAll());
          return { tag: i.ES, parsed: !0, body: t, descriptorList: o };
        },
        [i.DECODER_CONFIG]: (t) => {
          const e = new I(t), r = w(e.read(1));
          e.moveCursor(1), e.moveCursor(3), e.moveCursor(4), e.moveCursor(4);
          const o = B(e.readAll());
          return {
            tag: i.DECODER_CONFIG,
            parsed: !0,
            oti: r,
            body: t,
            descriptorList: o,
          };
        },
        [i.DECODER_SPECIFIC]: (t) => {
          const e = w(t.slice(0, 1)), r = w(t.slice(1, 2));
          let o = (248 & e) >> 3;
          return 31 === o && t.length >= 2 &&
            (o = 32 + ((7 & e) << 3) + ((224 & r) >> 5)),
            {
              tag: i.DECODER_SPECIFIC,
              parsed: !0,
              audioObjectType: o,
              body: t,
            };
        },
      };
    class z {
      #r;
      #o = [];
      constructor(t) {
        this.#r = t;
      }
      async parse() {
        this.#o = await (async (t, e) => {
          const r = [];
          let o = 0, s = 8;
          for (; o < t.size;) {
            const n = await L(t, o, o + 8);
            let i = w(n.slice(0, 4));
            const a = l(n.slice(4, 8));
            if (0 === i) {
              i = t.size - o,
                r.push({ type: a, parsed: !1, size: i, offset: e + o });
              break;
            }
            if (
              1 === i &&
              (i = Number(E(await L(t, o + 8, o + 8 + 8))),
                s += 8,
                i >= Number.MAX_SAFE_INTEGER)
            ) throw new Error(`Box size is too large: ${a}, ${i}`);
            if (!a) throw new Error(`Invalid box type: ${a}`);
            const d = x[a];
            if (d) {
              const n = await L(t, o + s, o + i);
              r.push(d(n, i, e + o));
            } else r.push({ type: a, parsed: !1, size: i, offset: e + o });
            o += i;
          }
          return r;
        })(this.#r, 0);
      }
      isFragmentedMp4() {
        return !!this.#s(this.#o, "moof");
      }
      getVideoTrackIds() {
        return this.#n(this.#o, "moov.trak.tkhd").filter((t) => !t.volume).map(
          (t) => t.trackId,
        );
      }
      getAudioTrackIds() {
        return this.#n(this.#o, "moov.trak.tkhd").filter((t) => t.volume).map(
          (t) => t.trackId,
        );
      }
      getVideoTrackInfo(t) {
        const e = this.#i(t);
        if (e.tkhd.volume) throw new Error(`Track ${t} is not video track`);
        const r = e.mdia.minf.stbl.stsd.childBoxList[0];
        if (!r || !("width" in r) || !("childBoxList" in r)) {
          throw new Error("Invalid track");
        }
        const o = D(r);
        if (!o) throw new Error("Invalid track");
        let s = r.type;
        "codecSuffix" in o && (s += `.${o.codecSuffix}`);
        const n = e.tkhd.width,
          i = e.tkhd.height,
          a = e.tkhd.transformMatrix,
          { duration: d, timeScale: c } = e.mdia.mdhd,
          f = this.#a(t),
          u = this.#d(t),
          h = Number(d / BigInt(c));
        return {
          codec: s,
          width: n,
          height: i,
          transformMatrix: a,
          duration: d,
          timeScale: c,
          sampleCount: f,
          frameRate: f / h,
          bitRate: 8 * u / h,
        };
      }
      getAudioTrackInfo(t) {
        const e = this.#i(t);
        if (!e.tkhd.volume) throw new Error(`Track ${t} is not audio track`);
        const r = e.mdia.minf.stbl.stsd.childBoxList[0];
        if (!r || !("sampleRate" in r)) throw new Error("Invalid track");
        let o = r.type;
        const s = r.sampleRate,
          n = r.channelCount,
          { duration: a, timeScale: d } = e.mdia.mdhd,
          c = this.#a(t),
          f = 8 * this.#d(t) / Number(a / BigInt(d));
        if ("mp4a" === r.type) {
          const t = this.#s(r.childBoxList, "esds"),
            e = t?.descriptorList.find((t) => t.tag === i.ES && t.parsed)
              ?.descriptorList.find(
                (t) => t.tag === i.DECODER_CONFIG && t.parsed,
              ),
            s = e?.descriptorList.find(
              (t) => t.tag === i.DECODER_SPECIFIC && t.parsed,
            );
          e && s &&
            (o += `.${
              e.oti.toString(16).padStart(2, "0")
            }.${s.audioObjectType}`);
        }
        return {
          codec: o,
          sampleRate: s,
          channelCount: n,
          duration: a,
          timeScale: d,
          sampleCount: c,
          bitRate: f,
        };
      }
      getVideoDecoderConfigByTrackId(t) {
        const { codec: e, width: r, height: o } = this.getVideoTrackInfo(t),
          s = this.#i(t).mdia.minf.stbl.stsd.childBoxList[0];
        if (!s) throw new Error("Invalid track");
        const n = D(s);
        if (!n) throw new Error("Invalid track");
        let i;
        return "body" in n && (i = n.body),
          { codec: e, codedWidth: r, codedHeight: o, description: i };
      }
      getAudioDecoderConfigByTrackId(t) {
        const { codec: e, sampleRate: r, channelCount: o } = this
            .getAudioTrackInfo(t),
          s = this.#i(t).mdia.minf.stbl.stsd.childBoxList[0];
        if (!s || !("sampleRate" in s)) throw new Error("Invalid track");
        let n;
        if ("mp4a" === s.type) {
          const t = this.#s(s.childBoxList, "esds"),
            e = t?.descriptorList.find((t) => t.tag === i.ES && t.parsed)
              ?.descriptorList.find(
                (t) => t.tag === i.DECODER_CONFIG && t.parsed,
              ),
            r = e?.descriptorList.find(
              (t) => t.tag === i.DECODER_SPECIFIC && t.parsed,
            );
          e && r && (n = r.body);
        }
        return { codec: e, sampleRate: r, numberOfChannels: o, description: n };
      }
      sampleListGenerator(t) {
        return this.isFragmentedMp4() ? this.#c(t) : this.#f(t);
      }
      *#f(t) {
        const e = this.#i(t),
          r = e.mdia.mdhd.timeScale,
          { stco: o, stsc: s, stsz: n, stts: i, stss: a, ctts: d } =
            e.mdia.minf.stbl,
          c = o.chunkOffsetList,
          f = c.length,
          u = [];
        for (let C = 0; C < s.sampleToChunkInfoList.length; C++) {
          const t = s.sampleToChunkInfoList[C],
            e = s.sampleToChunkInfoList[C + 1],
            r = e
              ? e.firstChunkIndex - t.firstChunkIndex
              : f - t.firstChunkIndex + 1;
          for (let o = 0; o < r; o++) u.push(t.sampleCount);
        }
        const h = n.sampleSizeList, l = [];
        for (const C of i.sampleDeltaInfoList) {
          const { count: t, delta: e } = C;
          for (let r = 0; r < t; r++) l.push(e);
        }
        const p = [];
        if (d) {
          for (const C of d.sampleOffsetInfoList) {
            const { count: t, offset: e } = C;
            for (let r = 0; r < t; r++) p.push(e);
          }
        }
        const m = a?.syncSampleIndexList;
        let w = 0, y = 0, E = 0;
        for (let C = 0; C < f; C++) {
          const t = u[C] ?? 0;
          let e = c[C];
          for (let o = 0; o < t; o++) {
            const t = h[E],
              o = l[E] ?? 0,
              s = p[E] ?? 0,
              n = !m || E + 1 === m?.[w];
            n && w++;
            const i = {
              size: t,
              isSync: n,
              dts: y,
              cts: y + s,
              duration: o,
              timeScale: r,
              data: this.#r.slice(e, e + t),
            };
            yield i, E++, y += o, e += t;
          }
        }
      }
      *#c(t) {
        const e = this.#i(t),
          r = this.#n(this.#o, "moov.mvex.trex").find((e) => e.trackId === t),
          o = e.mdia.mdhd.timeScale;
        let s = 0;
        const n = this.#n(this.#o, "moof");
        for (const i of n) {
          for (const e of i.trafList) {
            if (e.tfhd.trackId !== t) continue;
            const n = e.tfhd.defaultSampleDuration ||
                r?.defaultSampleDuration || 0,
              a = e.tfhd.defaultSampleSize || r?.defaultSampleSize || 0,
              d = e.tfhd.defaultSampleFlags || r?.defaultSampleFlags || 0,
              c = Number(e.tfhd.baseDataOffset) || i.offset;
            for (const t of e.trunList) {
              let e = c + t.dataOffset;
              for (let r = 0; r < t.sampleCount; r++) {
                const i = t.sampleFlagsList[r] ?? d,
                  c = t.sampleSizeList[r] ?? a,
                  f = t.sampleDurationList[r] ?? n,
                  u = {
                    size: c,
                    isSync: !(i >> 16 & 1),
                    dts: s,
                    cts: s + (t.sampleCompositionTimeOffsetList[r] ?? 0),
                    duration: f,
                    timeScale: o,
                    data: this.#r.slice(e, e + c),
                  };
                yield u, s += f, e += c;
              }
            }
          }
        }
      }
      #s(t, e) {
        const r = e.split("."), o = r[0], s = t.find((t) => t.type === o);
        if (s) {
          return 1 === r.length
            ? s
            : "childBoxList" in s
            ? this.#s(s.childBoxList, r.slice(1).join("."))
            : void 0;
        }
      }
      #n(t, e) {
        const r = e.split("."), o = r[0], s = t.filter((t) => t.type === o);
        return s.length
          ? 1 === r.length
            ? s
            : s.flatMap((t) => "childBoxList" in t
              ? this.#n(t.childBoxList, r.slice(1).join("."))
              : []
            )
          : [];
      }
      #i(t) {
        const e = this.#n(this.#o, "moov.trak").find(
          (e) => e.tkhd.trackId === t,
        );
        if (!e) throw new Error(`Track ${t} not exists`);
        return e;
      }
      #a(t) {
        const e = this.#i(t);
        if (!e) throw new Error(`Track ${t} not exists`);
        if (this.isFragmentedMp4()) {
          let e = 0;
          const r = this.#n(this.#o, "moof");
          for (const o of r) {
            for (const r of o.trafList) {
              if (r.tfhd.trackId === t) {
                for (const t of r.trunList) e += t.sampleCount;
              }
            }
          }
          return e;
        }
        return e.mdia.minf.stbl.stsz.sampleSizeList.length;
      }
      #d(t) {
        const e = this.#i(t);
        if (!e) throw new Error(`Track ${t} not exists`);
        if (this.isFragmentedMp4()) {
          let e = 0;
          const r = this.#n(this.#o, "moov.mvex.trex").find(
              (e) => e.trackId === t,
            ),
            o = this.#n(this.#o, "moof");
          for (const s of o) {
            for (const o of s.trafList) {
              if (o.tfhd.trackId !== t) continue;
              const s = o.tfhd.defaultSampleSize || r?.defaultSampleSize || 0;
              for (const t of o.trunList) {
                for (let r = 0; r < t.sampleCount; r++) {
                  e += t.sampleSizeList[r] ?? s;
                }
              }
            }
          }
          return e;
        }
        return e.mdia.minf.stbl.stsz.sampleSizeList.reduce((t, e) => t + e, 0);
      }
    }
    class F {
      #u = [];
      #h = [];
      #l = 0;
      write(t) {
        this.#h.push(t), this.#l += t.length, this.#l >= 5242880 && this.#p();
      }
      writeBlob(t) {
        this.#h.length && this.#p(), this.#u.push(t);
      }
      flush(t) {
        this.#h.length && this.#p();
        const e = new Blob(this.#u, t);
        return this.#u = [], e;
      }
      #p() {
        this.#u.push(new Blob(this.#h)), this.#h = [], this.#l = 0;
      }
    }
    const N = ["isom", "avc1"];
    class M {
      #m = [];
      #w = 0;
      #y() {
        return {
          type: "ftyp",
          data: [h("isom"), m(1, 4), ...N.map((t) => h(t))],
        };
      }
      #E(t) {
        const e = t[0];
        if (!e) throw new Error("Track not found");
        return {
          type: "moov",
          data: [this.#C(e, t.length), ...t.map((t) => this.#S(t))],
        };
      }
      #C(t, r) {
        const o = "audio" === t.type ? t.sampleRate : t.timeScale;
        return {
          type: "mvhd",
          data: [
            new Uint8Array([1, 0, 0, 0]),
            m(this.#w, 8),
            m(this.#w, 8),
            m(o, 4),
            m(t.duration / e * o, 8),
            new Uint8Array([
              0,
              1,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              64,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ]),
            m(r + 1, 4),
          ],
        };
      }
      #S(t) {
        return { type: "trak", data: [this.#g(t), this.#v(t)] };
      }
      #g(t) {
        const r = "audio" === t.type, o = r ? t.sampleRate : t.timeScale;
        return {
          type: "tkhd",
          data: [
            new Uint8Array([1, 0, 0, 7]),
            m(this.#w, 8),
            m(this.#w, 8),
            m(t.id, 4),
            new Uint8Array([0, 0, 0, 0]),
            m(t.duration / e * o, 8),
            new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              r ? 1 : 0,
              0,
              0,
              0,
            ]),
            r
              ? new Uint8Array([
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                64,
                0,
                0,
                0,
              ])
              : t.transformMatrix,
            m(r ? 0 : t.width, 2),
            m(0, 2),
            m(r ? 0 : t.height, 2),
            m(0, 2),
          ],
        };
      }
      #v(t) {
        return { type: "mdia", data: [this.#A(t), this.#b(t), this.#L(t)] };
      }
      #A(t) {
        const r = "audio" === t.type ? t.sampleRate : t.timeScale;
        return {
          type: "mdhd",
          data: [
            new Uint8Array([1, 0, 0, 0]),
            m(this.#w, 8),
            m(this.#w, 8),
            m(r, 4),
            m(t.duration / e * r, 8),
            new Uint8Array([85, 196, 0, 0]),
          ],
        };
      }
      #b(t) {
        const e = new Uint8Array([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            118,
            105,
            100,
            101,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            86,
            105,
            100,
            101,
            111,
            72,
            97,
            110,
            100,
            108,
            101,
            114,
            0,
          ]),
          r = new Uint8Array([
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            115,
            111,
            117,
            110,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            83,
            111,
            117,
            110,
            100,
            72,
            97,
            110,
            100,
            108,
            101,
            114,
            0,
          ]);
        return { type: "hdlr", data: ["audio" === t.type ? r : e] };
      }
      #L(t) {
        return {
          type: "minf",
          data: [
            "audio" === t.type ? this.#D() : this.#I(),
            this.#T(),
            this.#R(t),
          ],
        };
      }
      #I() {
        return {
          type: "vmhd",
          data: [new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])],
        };
      }
      #D() {
        return {
          type: "smhd",
          data: [new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])],
        };
      }
      #T() {
        return { type: "dinf", data: [this.#x()] };
      }
      #x() {
        return {
          type: "dref",
          data: [
            new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              12,
              117,
              114,
              108,
              32,
              0,
              0,
              0,
              1,
            ]),
          ],
        };
      }
      #R(t) {
        const e = [this.#O(t), this.#k(t), this.#B(t), this.#_(t), this.#z(t)];
        return "video" === t.type && e.push(this.#F(t)),
          { type: "stbl", data: e };
      }
      #O(t) {
        return {
          type: "stsd",
          data: [
            new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]),
            "audio" === t.type ? this.#N(t) : this.#M(t),
          ],
        };
      }
      #N(t) {
        return {
          type: "mp4a",
          data: [
            new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
            m(t.channelCount, 2),
            m(16, 2),
            new Uint8Array([0, 0, 0, 0]),
            m(t.sampleRate, 2),
            new Uint8Array([0, 0]),
            this.#U(t),
          ],
        };
      }
      #U(t) {
        const e = r[t.sampleRate];
        if (void 0 === e) throw new Error("Invalid sampleRate");
        return {
          type: "esds",
          data: [
            new Uint8Array([
              0,
              0,
              0,
              0,
              3,
              25,
              0,
              1,
              0,
              4,
              17,
              64,
              21,
              0,
              0,
              0,
            ]),
            m(t.bitRate, 4),
            m(t.bitRate, 4),
            new Uint8Array([
              5,
              2,
              16 | e >>> 1,
              e << 7 | t.channelCount << 3,
              6,
              1,
              2,
            ]),
          ],
        };
      }
      #M(t) {
        return {
          type: "avc1",
          data: [
            new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ]),
            m(t.width, 2),
            m(t.height, 2),
            new Uint8Array([
              0,
              72,
              0,
              0,
              0,
              72,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              19,
              108,
              105,
              110,
              101,
              45,
              117,
              105,
              116,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              24,
              17,
              17,
            ]),
            this.#G(t),
            this.#P(t),
            this.#V(),
          ],
        };
      }
      #G(t) {
        return { type: "avcC", data: t.description ? [t.description] : [] };
      }
      #P(t) {
        return {
          type: "btrt",
          data: [m(0, 4), m(t.bitRate, 4), m(t.bitRate, 4)],
        };
      }
      #V() {
        return { type: "pasp", data: [m(1, 4), m(1, 4)] };
      }
      #k(t) {
        const r = "audio" === t.type ? t.sampleRate : t.timeScale,
          o = t.data[0];
        if (!o) throw new Error("Sample not exist");
        if (!o.duration) throw new Error("Invalid sample");
        return {
          type: "stts",
          data: [
            new Uint8Array([0, 0, 0, 0]),
            m(1, 4),
            m(t.data.length, 4),
            m(t.duration / t.data.length / e * r, 4),
          ],
        };
      }
      #F(t) {
        const e = t.data.reduce(
          (t, e, r) => ("key" === e.type && t.push(r + 1), t),
          [],
        );
        return {
          type: "stss",
          data: [
            new Uint8Array([0, 0, 0, 0]),
            m(e.length, 4),
            ...e.map((t) => m(t, 4)),
          ],
        };
      }
      #B(t) {
        return {
          type: "stsc",
          data: [
            new Uint8Array([0, 0, 0, 0]),
            m(1, 4),
            m(1, 4),
            m(t.data.length, 4),
            m(1, 4),
          ],
        };
      }
      #_(t) {
        return {
          type: "stsz",
          data: [
            new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
            m(t.data.length, 4),
            ...t.data.map((t) => m(t.byteLength, 4)),
          ],
        };
      }
      #z(t) {
        return {
          type: "stco",
          data: [
            new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]),
            m((t.offsetOfMdat ?? 0) + 8, 4),
          ],
        };
      }
      #q(t) {
        return { type: "mdat", data: t.data };
      }
      #$(t, e) {
        const r = this.#H(t);
        e.write(m(r, 4)), e.write(h(t.type));
        for (const o of t.data) {
          o instanceof Uint8Array
            ? e.write(o)
            : o instanceof EncodedAudioChunk || o instanceof EncodedVideoChunk
            ? e.write(p(o))
            : this.#$(o, e);
        }
      }
      #H(t) {
        return 8 +
          t.data.reduce(
            (t, e) =>
              e instanceof Uint8Array || e instanceof EncodedAudioChunk ||
                e instanceof EncodedVideoChunk
                ? t + e.byteLength
                : t + this.#H(e),
            0,
          );
      }
      wrapAudio(e) {
        this.#w = Math.floor((Date.now() - t) / 1e3);
        const r = this.#y(), o = this.#H(r);
        this.#m.push(r),
          e.offsetOfMdat = o,
          this.#m.push(this.#q(e)),
          this.#m.push(this.#E([e]));
        const s = new F();
        for (const t of this.#m) this.#$(t, s);
        return this.#m = [], s.flush({ type: "audio/m4a" });
      }
      wrapVideo(e, r) {
        this.#w = Math.floor((Date.now() - t) / 1e3);
        const o = [e];
        r && o.push(r);
        const s = this.#y(), n = this.#H(s);
        this.#m.push(s);
        const i = this.#E(o);
        let a = n + this.#H(i);
        const d = [];
        for (const t of o) {
          t.offsetOfMdat = a;
          const e = this.#q(t);
          a += this.#H(e), d.push(e);
        }
        this.#m.push(this.#E(o), ...d);
        const c = new F();
        for (const t of this.#m) this.#$(t, c);
        return this.#m = [], c.flush({ type: "video/mp4" });
      }
    }
    var U, G, P, V;
    !function (t) {
      t.REQUEST = "request",
        t.CONTROL = "control",
        t.RESPONSE = "response",
        t.ERROR = "error",
        t.CALLBACK = "callback";
    }(U || (U = {})),
      function (t) {
        t.ABORT = "abort";
      }(G || (G = {})),
      function (t) {
        t.TRANSCODE_AUDIO = "transcodeAudio",
          t.TRANSCODE_VIDEO = "transcodeVideo",
          t.GET_MEDIA_INFO = "getMediaInfo";
      }(P || (P = {})),
      function (t) {
        t.PROGRESS = "progress";
      }(V || (V = {})),
      globalThis.addEventListener("message", (t) => {
        const { type: e, reqSeq: r, payload: o } = t.data;
        switch (e) {
          case U.REQUEST:
            q(r, o);
            break;
          case U.CONTROL:
            $(r, o);
        }
      });
    const q = async (t, e) => {
        try {
          switch (e.type) {
            case P.TRANSCODE_AUDIO: {
              const { data: r, options: o } = e,
                s = await Z(t, r.audioChannelDataInfo, o),
                n = { requestType: P.TRANSCODE_AUDIO, data: s },
                i = { type: U.RESPONSE, reqSeq: t, payload: n };
              globalThis.postMessage(i);
              break;
            }
            case P.TRANSCODE_VIDEO: {
              const { data: r, options: o } = e,
                s = await W(t, r.file, r.audioChannelDataInfo, o),
                n = { requestType: P.TRANSCODE_VIDEO, data: s },
                i = { type: U.RESPONSE, reqSeq: t, payload: n };
              globalThis.postMessage(i);
              break;
            }
            case P.GET_MEDIA_INFO: {
              const { data: r } = e,
                o = await j(r.file),
                s = { requestType: P.GET_MEDIA_INFO, data: o },
                n = { type: U.RESPONSE, reqSeq: t, payload: s };
              globalThis.postMessage(n);
              break;
            }
          }
        } catch (r) {
          const e = { type: U.ERROR, reqSeq: t, payload: { error: r } };
          globalThis.postMessage(e);
        }
      },
      $ = (t, e) => {
        if (e.controlType === G.ABORT) {
          ((t) => {
            S[t] = !0;
          })(t);
        }
      },
      H = (t, e) => {
        if (((t) => Boolean(S[t]))(t)) throw new Error("Aborted");
        const r = { callbackType: V.PROGRESS, progressRate: e },
          o = { type: U.CALLBACK, reqSeq: t, payload: r };
        globalThis.postMessage(o);
      },
      Z = async (t, e, { audioOptions: r }) => {
        const s = await v(e, r, (e) => {
            H(t, C(o.GET_CHANNEL_DATA, o.ENCODED, e));
          }),
          n = b(1, s),
          i = (new M()).wrapAudio(n);
        return H(t, o.DONE), i;
      },
      W = async (t, e, r, { audioOptions: o, videoOptions: n }) => {
        const i = new z(e);
        await i.parse(), H(t, s.PARSED);
        const a = ((
          t,
          {
            width: e,
            height: r,
            bitRate: o,
            duration: s,
            transformMatrix: n,
            description: i,
            chunkList: a,
          },
        ) => {
          const d = a.reduce((t, e) => t + e.byteLength, 0);
          return {
            id: t,
            type: "video",
            bitRate: o,
            timeScale: 1e3,
            width: e,
            height: r,
            duration: s,
            transformMatrix: n,
            description: i,
            data: a,
            dataByteLength: d,
          };
        })(
          1,
          await A(i, n, (e) => {
            H(t, C(s.PARSED, s.VIDEO_ENCODED, e));
          }),
        );
        let d;
        if (void 0 !== i.getAudioTrackIds()[0] && r) {
          const e = await v(r, o, (e) => {
            H(t, C(s.VIDEO_ENCODED, s.AUDIO_ENCODED, e));
          });
          d = b(2, e);
        }
        const c = (new M()).wrapVideo(a, d);
        return H(t, s.DONE), c;
      },
      j = async (t) => {
        const e = new z(t);
        await e.parse();
        const r = e.getVideoTrackIds(),
          o = e.getAudioTrackIds(),
          s = r[0] ?? 0,
          n = o[0] ?? 0;
        return {
          video: s ? e.getVideoTrackInfo(s) : void 0,
          audio: n ? e.getAudioTrackInfo(n) : void 0,
          isFragmented: e.isFragmentedMp4(),
        };
      };
  })();
