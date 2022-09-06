```bash
yarn run v1.22.19
$ ng test
06 09 2022 09:33:27.542:INFO [karma-server]: Karma v5.1.1 server started at http://localhost:9876/
06 09 2022 09:33:27.545:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 09 2022 09:33:27.564:INFO [launcher]: Starting browser Firefox
06 09 2022 09:33:38.290:INFO [Firefox 104.0 (Linux x86_64)]: Connected on socket YLQmkAAPOH7saR4cAAAA with id 6581259
Firefox 104.0 (Linux x86_64): Executed 0 of 8[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 104.0 (Linux x86_64): Executed 1 of 8[32m SUCCESS[39m (0 secs / 0.093 secs)
[1A[2KFirefox 104.0 (Linux x86_64): Executed 2 of 8[32m SUCCESS[39m (0 secs / 0.1 secs)
[1A[2KLOG: [36m'test message'[39m
Firefox 104.0 (Linux x86_64): Executed 2 of 8[32m SUCCESS[39m (0 secs / 0.1 secs)
LOG: 'test message'
[1A[2KFirefox 104.0 (Linux x86_64): Executed 3 of 8[32m SUCCESS[39m (0 secs / 0.108 secs)
[1A[2KLOG: [36m'test message'[39m
Firefox 104.0 (Linux x86_64): Executed 3 of 8[32m SUCCESS[39m (0 secs / 0.108 secs)
LOG: 'test message'
[1A[2KLOG: [36m'second message'[39m
Firefox 104.0 (Linux x86_64): Executed 3 of 8[32m SUCCESS[39m (0 secs / 0.108 secs)
LOG: 'second message'
[1A[2KFirefox 104.0 (Linux x86_64): Executed 4 of 8[32m SUCCESS[39m (0 secs / 0.114 secs)
[1A[2KFirefox 104.0 (Linux x86_64): Executed 5 of 8[32m SUCCESS[39m (0 secs / 0.118 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element:
1. If 'mat-toolbar' is an Angular component, then verify that it is part of this module.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 104.0 (Linux x86_64): Executed 5 of 8[32m SUCCESS[39m (0 secs / 0.118 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element:
1. If 'mat-toolbar' is an Angular component, then verify that it is part of this module.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-loading' is not a known element:
1. If 'app-loading' is an Angular component, then verify that it is part of this module.
2. If 'app-loading' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 104.0 (Linux x86_64): Executed 5 of 8[32m SUCCESS[39m (0 secs / 0.118 secs)
ERROR: 'NG0304: 'app-loading' is not a known element:
1. If 'app-loading' is an Angular component, then verify that it is part of this module.
2. If 'app-loading' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 104.0 (Linux x86_64): Executed 6 of 8[32m SUCCESS[39m (0 secs / 0.145 secs)
[1A[2K[31mFirefox 104.0 (Linux x86_64) HomeComponent should create FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[GetClientsService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 52551)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'GetClientsService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:52551:27
	get@vendor.js:52718:33
	get@vendor.js:52718:33
	injectInjectorOnly@vendor.js:46648:33
	ɵɵinject@vendor.js:46652:61
	GetClientsService_Factory@ng:///GetClientsService/ɵfac.js:5:45
	hydrate@vendor.js:52886:35
	get@vendor.js:52707:33
	get@vendor.js:66774:33
	get@vendor.js:66488:35
	lookupTokenUsingModuleInjector@vendor.js:45037:39
	getOrCreateInjectable@vendor.js:45149:12
	ɵɵdirectiveInject@vendor.js:56156:12
	HomeComponent_Factory@ng:///HomeComponent/ɵfac.js:5:41
	getNodeInjectable@vendor.js:45244:44
	instantiateRootComponent@vendor.js:51590:40
	createRootComponent@vendor.js:53902:47
	create@vendor.js:66577:25
	initComponent@vendor.js:79000:51
	invoke@polyfills.js:3275:30
	QpwO/</</ProxyZoneSpec.prototype.onInvoke@vendor.js:36089:43
	invoke@polyfills.js:3274:36
	onInvoke@vendor.js:70022:33
	invoke@polyfills.js:3274:36
	run@polyfills.js:3034:47
	run@vendor.js:69905:28
	createComponent@vendor.js:79003:41
	createComponent@vendor.js:78878:37
	rwjK/</<@main.js:783:81
	invoke@polyfills.js:3275:30
	QpwO/</</ProxyZoneSpec.prototype.onInvoke@vendor.js:36089:43
	invoke@polyfills.js:3274:36
	run@polyfills.js:3034:47
	runInTestZone@vendor.js:36342:38
	wrapTestInZone/<@vendor.js:36357:24
	<Jasmine>
	invoke@polyfills.js:3275:30
	run@polyfills.js:3034:47
	pDpN/</</</scheduleResolveOrReject/<@polyfills.js:3768:40
	invokeTask@polyfills.js:3310:35
	runTask@polyfills.js:3078:51
	drainMicroTaskQueue@polyfills.js:3480:39
	Expected undefined to be truthy.
	<Jasmine>
	rwjK/</<@main.js:788:27
	invoke@polyfills.js:3275:30
	QpwO/</</ProxyZoneSpec.prototype.onInvoke@vendor.js:36089:43
	invoke@polyfills.js:3274:36
	run@polyfills.js:3034:47
	runInTestZone@vendor.js:36342:38
	wrapTestInZone/<@vendor.js:36357:24
	<Jasmine>
	invoke@polyfills.js:3275:30
	run@polyfills.js:3034:47
	pDpN/</</</scheduleResolveOrReject/<@polyfills.js:3768:40
	invokeTask@polyfills.js:3310:35
	runTask@polyfills.js:3078:51
	drainMicroTaskQueue@polyfills.js:3480:39
Firefox 104.0 (Linux x86_64): Executed 7 of 8[31m (1 FAILED)[39m (0 secs / 0.167 secs)
Firefox 104.0 (Linux x86_64) HomeComponent should create FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[GetClientsService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 52551)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'GetClientsService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:52551:27
	get@vendor.js:52718:33
	get@vendor.js:52718:33
	injectInjectorOnly@vendor.js:46648:33
	ɵɵinject@vendor.js:46652:61
	GetClientsService_Factory@ng:///GetClientsService/ɵfac.js:5:45
	hydrate@vendor.js:52886:35
	get@vendor.js:52707:33
	get@vendor.js:66774:33
	get@vendor.js:66488:35
	lookupTokenUsingModuleInjector@vendor.js:45037:39
	getOrCreateInjectable@vendor.js:45149:12
	ɵɵdirectiveInject@vendor.js:56156:12
	HomeComponent_Factory@ng:///HomeComponent/ɵfac.js:5:41
	getNodeInjectable@vendor.js:45244:44
	instantiateRootComponent@vendor.js:51590:40
	createRootComponent@vendor.js:53902:47
	create@vendor.js:66577:25
	initComponent@vendor.js:79000:51
	invoke@polyfills.js:3275:30
	QpwO/</</ProxyZoneSpec.prototype.onInvoke@vendor.js:36089:43
	invoke@polyfills.js:3274:36
	onInvoke@vendor.js:70022:33
	invoke@polyfills.js:3274:36
	run@polyfills.js:3034:47
	run@vendor.js:69905:28
	createComponent@vendor.js:79003:41
	createComponent@vendor.js:78878:37
	rwjK/</<@main.js:783:81
	invoke@polyfills.js:3275:30
	QpwO/</</ProxyZoneSpec.prototype.onInvoke@vendor.js:36089:43
	invoke@polyfills.js:3274:36
	run@polyfills.js:3034:47
	runInTestZone@vendor.js:36342:38
	wrapTestInZone/<@vendor.js:36357:24
	<Jasmine>
	invoke@polyfills.js:3275:30
	run@polyfills.js:3034:47
	pDpN/</</</scheduleResolveOrReject/<@polyfills.js:3768:40
	invokeTask@polyfills.js:3310:35
	runTask@polyfills.js:3078:51
	drainMicroTaskQueue@polyfills.js:3480:39
	Expected undefined to be truthy.
	<Jasmine>
	rwjK/</<@main.js:788:27
	invoke@polyfills.js:3275:30
	QpwO/</</ProxyZoneSpec.prototype.onInvoke@vendor.js:36089:43
	invoke@polyfills.js:3274:36
	run@polyfills.js:3034:47
	runInTestZone@vendor.js:36342:38
	wrapTestInZone/<@vendor.js:36357:24
	<Jasmine>
	invoke@polyfills.js:3275:30
	run@polyfills.js:3034:47
	pDpN/</</</scheduleResolveOrReject/<@polyfills.js:3768:40
	invokeTask@polyfills.js:3310:35
	runTask@polyfills.js:3078:51
	drainMicroTaskQueue@polyfills.js:3480:39
[1A[2K[31mFirefox 104.0 (Linux x86_64) GetClientsService should be created FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[GetClientsService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 52551)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'GetClientsService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:52551:27
	get@vendor.js:52718:33
	get@vendor.js:52718:33
	injectInjectorOnly@vendor.js:46648:33
	ɵɵinject@vendor.js:46652:61
	GetClientsService_Factory@ng:///GetClientsService/ɵfac.js:5:45
	hydrate@vendor.js:52886:35
	get@vendor.js:52707:33
	get@vendor.js:66774:33
	inject@vendor.js:78946:52
	inject@vendor.js:78871:37
	3Ymg/</<@main.js:227:81
	invoke@polyfills.js:3275:30
	QpwO/</</ProxyZoneSpec.prototype.onInvoke@vendor.js:36089:43
	invoke@polyfills.js:3274:36
	run@polyfills.js:3034:47
	runInTestZone@vendor.js:36342:38
	wrapTestInZone/<@vendor.js:36357:24
	<Jasmine>
	invokeTask@polyfills.js:3310:35
	runTask@polyfills.js:3078:51
	drainMicroTaskQueue@polyfills.js:3480:39
	Expected undefined to be truthy.
	<Jasmine>
	3Ymg/</<@main.js:230:25
	invoke@polyfills.js:3275:30
	QpwO/</</ProxyZoneSpec.prototype.onInvoke@vendor.js:36089:43
	invoke@polyfills.js:3274:36
	run@polyfills.js:3034:47
	runInTestZone@vendor.js:36342:38
	wrapTestInZone/<@vendor.js:36357:24
	<Jasmine>
	invokeTask@polyfills.js:3310:35
	runTask@polyfills.js:3078:51
	drainMicroTaskQueue@polyfills.js:3480:39
Firefox 104.0 (Linux x86_64): Executed 8 of 8[31m (2 FAILED)[39m (0 secs / 0.172 secs)
Firefox 104.0 (Linux x86_64) GetClientsService should be created FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[GetClientsService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 52551)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'GetClientsService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:52551:27
	get@vendor.js:52718:33
	get@vendor.js:52718:33
	injectInjectorOnly@vendor.js:46648:33
	ɵɵinject@vendor.js:46652:61
	GetClientsService_Factory@ng:///GetClientsService/ɵfac.js:5:45
	hydrate@vendor.js:52886:35
	get@vendor.js:52707:33
	get@vendor.js:66774:33
	inject@vendor.js:78946:52
	inject@vendor.js:78871:37
	3Ymg/</<@main.js:227:81
	invoke@polyfills.js:3275:30
	QpwO/</</ProxyZoneSpec.prototype.onInvoke@vendor.js:36089:43
	invoke@polyfills.js:3274:36
	run@polyfills.js:3034:47
	runInTestZone@vendor.js:36342:38
	wrapTestInZone/<@vendor.js:36357:24
	<Jasmine>
	invokeTask@polyfills.js:3310:35
	runTask@polyfills.js:3078:51
	drainMicroTaskQueue@polyfills.js:3480:39
	Expected undefined to be truthy.
	<Jasmine>
	3Ymg/</<@main.js:230:25
	invoke@polyfills.js:3275:30
	QpwO/</</ProxyZoneSpec.prototype.onInvoke@vendor.js:36089:43
	invoke@polyfills.js:3274:36
	run@polyfills.js:3034:47
	runInTestZone@vendor.js:36342:38
	wrapTestInZone/<@vendor.js:36357:24
	<Jasmine>
	invokeTask@polyfills.js:3310:35
	runTask@polyfills.js:3078:51
	drainMicroTaskQueue@polyfills.js:3480:39
[1A[2KFirefox 104.0 (Linux x86_64): Executed 8 of 8[31m (2 FAILED)[39m (0.204 secs / 0.172 secs)
[31mTOTAL: 2 FAILED, 6 SUCCESS[39m
TOTAL: 2 FAILED, 6 SUCCESS
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
