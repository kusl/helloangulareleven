```bash
yarn run v1.22.19
$ ng test
06 09 2022 18:11:41.522:INFO [karma-server]: Karma v6.4.0 server started at http://localhost:9876/
06 09 2022 18:11:41.525:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 09 2022 18:11:41.530:INFO [launcher]: Starting browser Firefox
06 09 2022 18:11:44.101:INFO [Firefox 104.0 (Linux x86_64)]: Connected on socket sedlDNbmXKq20OYvAAAB with id 88714777
Firefox 104.0 (Linux x86_64): Executed 0 of 8[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KFirefox 104.0 (Linux x86_64): Executed 1 of 8[32m SUCCESS[39m (0 secs / 0.063 secs)
[1A[2K[31mFirefox 104.0 (Linux x86_64) GetClientsService should be created FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[GetClientsService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 51126)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'GetClientsService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:51126:27
	get@vendor.js:51293:33
	get@vendor.js:51293:33
	injectInjectorOnly@vendor.js:44743:33
	ɵɵinject@vendor.js:44747:61
	GetClientsService_Factory@ng:///GetClientsService/ɵfac.js:5:45
	hydrate@vendor.js:51463:35
	get@vendor.js:51282:33
	get@vendor.js:61857:33
	inject@vendor.js:70530:52
	inject@vendor.js:70421:37
	7050/</<@main.js:92:78
	invoke@polyfills.js:448:26
	onInvoke@vendor.js:3972:39
	invoke@polyfills.js:447:52
	run@polyfills.js:210:43
	runInTestZone@vendor.js:4267:34
	3761/</wrapTestInZone/<@vendor.js:4282:20
	<Jasmine>
	invokeTask@polyfills.js:482:31
	runTask@polyfills.js:254:47
	drainMicroTaskQueue@polyfills.js:661:35
	Expected undefined to be truthy.
	<Jasmine>
	7050/</<@main.js:95:25
	invoke@polyfills.js:448:26
	onInvoke@vendor.js:3972:39
	invoke@polyfills.js:447:52
	run@polyfills.js:210:43
	runInTestZone@vendor.js:4267:34
	3761/</wrapTestInZone/<@vendor.js:4282:20
	<Jasmine>
	invokeTask@polyfills.js:482:31
	runTask@polyfills.js:254:47
	drainMicroTaskQueue@polyfills.js:661:35
Firefox 104.0 (Linux x86_64): Executed 2 of 8[31m (1 FAILED)[39m (0 secs / 0.086 secs)
Firefox 104.0 (Linux x86_64) GetClientsService should be created FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[GetClientsService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 51126)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'GetClientsService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:51126:27
	get@vendor.js:51293:33
	get@vendor.js:51293:33
	injectInjectorOnly@vendor.js:44743:33
	ɵɵinject@vendor.js:44747:61
	GetClientsService_Factory@ng:///GetClientsService/ɵfac.js:5:45
	hydrate@vendor.js:51463:35
	get@vendor.js:51282:33
	get@vendor.js:61857:33
	inject@vendor.js:70530:52
	inject@vendor.js:70421:37
	7050/</<@main.js:92:78
	invoke@polyfills.js:448:26
	onInvoke@vendor.js:3972:39
	invoke@polyfills.js:447:52
	run@polyfills.js:210:43
	runInTestZone@vendor.js:4267:34
	3761/</wrapTestInZone/<@vendor.js:4282:20
	<Jasmine>
	invokeTask@polyfills.js:482:31
	runTask@polyfills.js:254:47
	drainMicroTaskQueue@polyfills.js:661:35
	Expected undefined to be truthy.
	<Jasmine>
	7050/</<@main.js:95:25
	invoke@polyfills.js:448:26
	onInvoke@vendor.js:3972:39
	invoke@polyfills.js:447:52
	run@polyfills.js:210:43
	runInTestZone@vendor.js:4267:34
	3761/</wrapTestInZone/<@vendor.js:4282:20
	<Jasmine>
	invokeTask@polyfills.js:482:31
	runTask@polyfills.js:254:47
	drainMicroTaskQueue@polyfills.js:661:35
[1A[2K[31mFirefox 104.0 (Linux x86_64) HomeComponent should create FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[GetClientsService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 51126)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'GetClientsService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:51126:27
	get@vendor.js:51293:33
	get@vendor.js:51293:33
	injectInjectorOnly@vendor.js:44743:33
	ɵɵinject@vendor.js:44747:61
	GetClientsService_Factory@ng:///GetClientsService/ɵfac.js:5:45
	hydrate@vendor.js:51463:35
	get@vendor.js:51282:33
	get@vendor.js:61857:33
	get@vendor.js:61534:35
	lookupTokenUsingModuleInjector@vendor.js:43336:39
	getOrCreateInjectable@vendor.js:43448:12
	ɵɵdirectiveInject@vendor.js:54402:12
	HomeComponent_Factory@ng:///HomeComponent/ɵfac.js:5:41
	getNodeInjectable@vendor.js:43543:44
	instantiateRootComponent@vendor.js:50162:40
	createRootComponent@vendor.js:52266:47
	create@vendor.js:61623:25
	initComponent@vendor.js:70584:51
	invoke@polyfills.js:448:26
	onInvoke@vendor.js:3972:39
	invoke@polyfills.js:447:52
	onInvoke@vendor.js:65577:33
	invoke@polyfills.js:447:52
	run@polyfills.js:210:43
	run@vendor.js:65431:28
	createComponent@vendor.js:70587:41
	createComponent@vendor.js:70428:37
	7263/</<@main.js:194:78
	invoke@polyfills.js:448:26
	onInvoke@vendor.js:3972:39
	invoke@polyfills.js:447:52
	run@polyfills.js:210:43
	runInTestZone@vendor.js:4267:34
	3761/</wrapTestInZone/<@vendor.js:4282:20
	<Jasmine>
	invoke@polyfills.js:448:26
	run@polyfills.js:210:43
	4924/</scheduleResolveOrReject/<@polyfills.js:1351:36
	invokeTask@polyfills.js:482:31
	runTask@polyfills.js:254:47
	drainMicroTaskQueue@polyfills.js:661:35
	Expected undefined to be truthy.
	<Jasmine>
	7263/</<@main.js:199:27
	invoke@polyfills.js:448:26
	onInvoke@vendor.js:3972:39
	invoke@polyfills.js:447:52
	run@polyfills.js:210:43
	runInTestZone@vendor.js:4267:34
	3761/</wrapTestInZone/<@vendor.js:4282:20
	<Jasmine>
	invoke@polyfills.js:448:26
	run@polyfills.js:210:43
	4924/</scheduleResolveOrReject/<@polyfills.js:1351:36
	invokeTask@polyfills.js:482:31
	runTask@polyfills.js:254:47
	drainMicroTaskQueue@polyfills.js:661:35
Firefox 104.0 (Linux x86_64): Executed 3 of 8[31m (2 FAILED)[39m (0 secs / 0.128 secs)
Firefox 104.0 (Linux x86_64) HomeComponent should create FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[GetClientsService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 51126)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'GetClientsService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:51126:27
	get@vendor.js:51293:33
	get@vendor.js:51293:33
	injectInjectorOnly@vendor.js:44743:33
	ɵɵinject@vendor.js:44747:61
	GetClientsService_Factory@ng:///GetClientsService/ɵfac.js:5:45
	hydrate@vendor.js:51463:35
	get@vendor.js:51282:33
	get@vendor.js:61857:33
	get@vendor.js:61534:35
	lookupTokenUsingModuleInjector@vendor.js:43336:39
	getOrCreateInjectable@vendor.js:43448:12
	ɵɵdirectiveInject@vendor.js:54402:12
	HomeComponent_Factory@ng:///HomeComponent/ɵfac.js:5:41
	getNodeInjectable@vendor.js:43543:44
	instantiateRootComponent@vendor.js:50162:40
	createRootComponent@vendor.js:52266:47
	create@vendor.js:61623:25
	initComponent@vendor.js:70584:51
	invoke@polyfills.js:448:26
	onInvoke@vendor.js:3972:39
	invoke@polyfills.js:447:52
	onInvoke@vendor.js:65577:33
	invoke@polyfills.js:447:52
	run@polyfills.js:210:43
	run@vendor.js:65431:28
	createComponent@vendor.js:70587:41
	createComponent@vendor.js:70428:37
	7263/</<@main.js:194:78
	invoke@polyfills.js:448:26
	onInvoke@vendor.js:3972:39
	invoke@polyfills.js:447:52
	run@polyfills.js:210:43
	runInTestZone@vendor.js:4267:34
	3761/</wrapTestInZone/<@vendor.js:4282:20
	<Jasmine>
	invoke@polyfills.js:448:26
	run@polyfills.js:210:43
	4924/</scheduleResolveOrReject/<@polyfills.js:1351:36
	invokeTask@polyfills.js:482:31
	runTask@polyfills.js:254:47
	drainMicroTaskQueue@polyfills.js:661:35
	Expected undefined to be truthy.
	<Jasmine>
	7263/</<@main.js:199:27
	invoke@polyfills.js:448:26
	onInvoke@vendor.js:3972:39
	invoke@polyfills.js:447:52
	run@polyfills.js:210:43
	runInTestZone@vendor.js:4267:34
	3761/</wrapTestInZone/<@vendor.js:4282:20
	<Jasmine>
	invoke@polyfills.js:448:26
	run@polyfills.js:210:43
	4924/</scheduleResolveOrReject/<@polyfills.js:1351:36
	invokeTask@polyfills.js:482:31
	runTask@polyfills.js:254:47
	drainMicroTaskQueue@polyfills.js:661:35
[1A[2KFirefox 104.0 (Linux x86_64): Executed 4 of 8[31m (2 FAILED)[39m (0 secs / 0.138 secs)
[1A[2KFirefox 104.0 (Linux x86_64): Executed 5 of 8[31m (2 FAILED)[39m (0 secs / 0.159 secs)
[1A[2KLOG: [36m'test message'[39m
Firefox 104.0 (Linux x86_64): Executed 5 of 8[31m (2 FAILED)[39m (0 secs / 0.159 secs)
LOG: 'test message'
[1A[2KFirefox 104.0 (Linux x86_64): Executed 6 of 8[31m (2 FAILED)[39m (0 secs / 0.181 secs)
[1A[2KLOG: [36m'test message'[39m
Firefox 104.0 (Linux x86_64): Executed 6 of 8[31m (2 FAILED)[39m (0 secs / 0.181 secs)
LOG: 'test message'
[1A[2KLOG: [36m'second message'[39m
Firefox 104.0 (Linux x86_64): Executed 6 of 8[31m (2 FAILED)[39m (0 secs / 0.181 secs)
LOG: 'second message'
[1A[2KFirefox 104.0 (Linux x86_64): Executed 7 of 8[31m (2 FAILED)[39m (0 secs / 0.21 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element:
1. If 'mat-toolbar' is an Angular component, then verify that it is part of this module.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 104.0 (Linux x86_64): Executed 7 of 8[31m (2 FAILED)[39m (0 secs / 0.21 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element:
1. If 'mat-toolbar' is an Angular component, then verify that it is part of this module.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-loading' is not a known element:
1. If 'app-loading' is an Angular component, then verify that it is part of this module.
2. If 'app-loading' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 104.0 (Linux x86_64): Executed 7 of 8[31m (2 FAILED)[39m (0 secs / 0.21 secs)
ERROR: 'NG0304: 'app-loading' is not a known element:
1. If 'app-loading' is an Angular component, then verify that it is part of this module.
2. If 'app-loading' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 104.0 (Linux x86_64): Executed 8 of 8[31m (2 FAILED)[39m (0 secs / 0.242 secs)
[1A[2KFirefox 104.0 (Linux x86_64): Executed 8 of 8[31m (2 FAILED)[39m (0.322 secs / 0.242 secs)
[31mTOTAL: 2 FAILED, 6 SUCCESS[39m
TOTAL: 2 FAILED, 6 SUCCESS
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
