(self.webpackChunkrugs=self.webpackChunkrugs||[]).push([[882],{74882:function(r,e,n){"use strict";n.r(e),n.d(e,{getED25519Key:function(){return s}});var f=n(22142);const t=n.n(f)().lowlevel;function s(r){let e;e="string"==typeof r?Buffer.from(r,"hex"):r;const n=new Uint8Array(64),f=[t.gf(),t.gf(),t.gf(),t.gf()],s=new Uint8Array([...new Uint8Array(e),...new Uint8Array(32)]),u=new Uint8Array(32);t.crypto_hash(n,s,32),n[0]&=248,n[31]&=127,n[31]|=64,t.scalarbase(f,n),t.pack(u,f);for(let t=0;t<32;t+=1)s[t+32]=u[t];return{sk:Buffer.from(s),pk:Buffer.from(u)}}}}]);