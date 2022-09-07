```bash
yarn run v1.22.19
$ ng test
06 09 2022 18:28:32.437:INFO [karma-server]: Karma v6.4.0 server started at http://localhost:9876/
06 09 2022 18:28:32.441:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
06 09 2022 18:28:32.446:INFO [launcher]: Starting browser Firefox
06 09 2022 18:28:35.393:INFO [Firefox 104.0 (Linux x86_64)]: Connected on socket MRH-GRWDAIYSaTR3AAAB with id 43581139
Firefox 104.0 (Linux x86_64): Executed 0 of 8[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KLOG: [36m'test message'[39m
Firefox 104.0 (Linux x86_64): Executed 0 of 8[32m SUCCESS[39m (0 secs / 0 secs)
LOG: 'test message'
[1A[2KFirefox 104.0 (Linux x86_64): Executed 1 of 8[32m SUCCESS[39m (0 secs / 0.086 secs)
[1A[2KLOG: [36m'test message'[39m
Firefox 104.0 (Linux x86_64): Executed 1 of 8[32m SUCCESS[39m (0 secs / 0.086 secs)
LOG: 'test message'
[1A[2KLOG: [36m'second message'[39m
Firefox 104.0 (Linux x86_64): Executed 1 of 8[32m SUCCESS[39m (0 secs / 0.086 secs)
LOG: 'second message'
[1A[2KFirefox 104.0 (Linux x86_64): Executed 2 of 8[32m SUCCESS[39m (0 secs / 0.117 secs)
[1A[2KFirefox 104.0 (Linux x86_64): Executed 3 of 8[32m SUCCESS[39m (0 secs / 0.137 secs)
[1A[2K[31mFirefox 104.0 (Linux x86_64) GetClientsService should be created FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[GetClientsService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 61859)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'GetClientsService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:61859:21
	get@vendor.js:62432:29
	get@vendor.js:62432:29
	injectInjectorOnly@vendor.js:59866:29
	ɵɵinject@vendor.js:59872:59
	GetClientsService_Factory@ng:///GetClientsService/ɵfac.js:5:45
	hydrate@vendor.js:62573:31
	get@vendor.js:62422:25
	inject@vendor.js:122531:48
	inject@vendor.js:122898:35
	7050/</<@main.js:87:78
	invoke@polyfills.js:542:160
	onInvoke@vendor.js:5648:35
	invoke@polyfills.js:542:48
	run@polyfills.js:208:37
	runInTestZone@vendor.js:6024:28
	3761/</wrapTestInZone/<@vendor.js:6041:14
	<Jasmine>
	invokeTask@polyfills.js:578:173
	runTask@polyfills.js:266:39
	drainMicroTaskQueue@polyfills.js:804:23
	Expected undefined to be truthy.
	<Jasmine>
	7050/</<@main.js:90:25
	invoke@polyfills.js:542:160
	onInvoke@vendor.js:5648:35
	invoke@polyfills.js:542:48
	run@polyfills.js:208:37
	runInTestZone@vendor.js:6024:28
	3761/</wrapTestInZone/<@vendor.js:6041:14
	<Jasmine>
	invokeTask@polyfills.js:578:173
	runTask@polyfills.js:266:39
	drainMicroTaskQueue@polyfills.js:804:23
Firefox 104.0 (Linux x86_64): Executed 4 of 8[31m (1 FAILED)[39m (0 secs / 0.16 secs)
Firefox 104.0 (Linux x86_64) GetClientsService should be created FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[GetClientsService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 61859)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'GetClientsService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:61859:21
	get@vendor.js:62432:29
	get@vendor.js:62432:29
	injectInjectorOnly@vendor.js:59866:29
	ɵɵinject@vendor.js:59872:59
	GetClientsService_Factory@ng:///GetClientsService/ɵfac.js:5:45
	hydrate@vendor.js:62573:31
	get@vendor.js:62422:25
	inject@vendor.js:122531:48
	inject@vendor.js:122898:35
	7050/</<@main.js:87:78
	invoke@polyfills.js:542:160
	onInvoke@vendor.js:5648:35
	invoke@polyfills.js:542:48
	run@polyfills.js:208:37
	runInTestZone@vendor.js:6024:28
	3761/</wrapTestInZone/<@vendor.js:6041:14
	<Jasmine>
	invokeTask@polyfills.js:578:173
	runTask@polyfills.js:266:39
	drainMicroTaskQueue@polyfills.js:804:23
	Expected undefined to be truthy.
	<Jasmine>
	7050/</<@main.js:90:25
	invoke@polyfills.js:542:160
	onInvoke@vendor.js:5648:35
	invoke@polyfills.js:542:48
	run@polyfills.js:208:37
	runInTestZone@vendor.js:6024:28
	3761/</wrapTestInZone/<@vendor.js:6041:14
	<Jasmine>
	invokeTask@polyfills.js:578:173
	runTask@polyfills.js:266:39
	drainMicroTaskQueue@polyfills.js:804:23
[1A[2K[31mFirefox 104.0 (Linux x86_64) HomeComponent should create FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[GetClientsService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 61859)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'GetClientsService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:61859:21
	get@vendor.js:62432:29
	get@vendor.js:62432:29
	injectInjectorOnly@vendor.js:59866:29
	ɵɵinject@vendor.js:59872:59
	GetClientsService_Factory@ng:///GetClientsService/ɵfac.js:5:45
	hydrate@vendor.js:62573:31
	get@vendor.js:62422:25
	get@vendor.js:71283:34
	lookupTokenUsingModuleInjector@vendor.js:58072:31
	getOrCreateInjectable@vendor.js:58127:10
	ɵɵdirectiveInject@vendor.js:67453:10
	HomeComponent_Factory@ng:///HomeComponent/ɵfac.js:5:41
	getNodeInjectable@vendor.js:58338:38
	instantiateRootComponent@vendor.js:69744:36
	createRootComponent@vendor.js:71590:43
	create@vendor.js:71422:21
	initComponent@vendor.js:122631:45
	invoke@polyfills.js:542:160
	onInvoke@vendor.js:5648:35
	invoke@polyfills.js:542:48
	onInvoke@vendor.js:85971:25
	invoke@polyfills.js:542:48
	run@polyfills.js:208:37
	run@vendor.js:85780:26
	createComponent@vendor.js:122635:37
	createComponent@vendor.js:122912:35
	7263/</<@main.js:188:74
	invoke@polyfills.js:542:160
	onInvoke@vendor.js:5648:35
	invoke@polyfills.js:542:48
	run@polyfills.js:208:37
	runInTestZone@vendor.js:6024:28
	3761/</wrapTestInZone/<@vendor.js:6041:14
	<Jasmine>
	invoke@polyfills.js:542:160
	run@polyfills.js:208:37
	4924/</scheduleResolveOrReject/<@polyfills.js:1699:26
	invokeTask@polyfills.js:578:173
	runTask@polyfills.js:266:39
	drainMicroTaskQueue@polyfills.js:804:23
	Expected undefined to be truthy.
	<Jasmine>
	7263/</<@main.js:193:23
	invoke@polyfills.js:542:160
	onInvoke@vendor.js:5648:35
	invoke@polyfills.js:542:48
	run@polyfills.js:208:37
	runInTestZone@vendor.js:6024:28
	3761/</wrapTestInZone/<@vendor.js:6041:14
	<Jasmine>
	invoke@polyfills.js:542:160
	run@polyfills.js:208:37
	4924/</scheduleResolveOrReject/<@polyfills.js:1699:26
	invokeTask@polyfills.js:578:173
	runTask@polyfills.js:266:39
	drainMicroTaskQueue@polyfills.js:804:23
Firefox 104.0 (Linux x86_64): Executed 5 of 8[31m (2 FAILED)[39m (0 secs / 0.221 secs)
Firefox 104.0 (Linux x86_64) HomeComponent should create FAILED
	NullInjectorError: R3InjectorError(DynamicTestModule)[GetClientsService -> HttpClient -> HttpClient]: 
	  NullInjectorError: No provider for HttpClient! in vendor.js (line 61859)
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'GetClientsService', 'HttpClient', 'HttpClient' ] })
	get@vendor.js:61859:21
	get@vendor.js:62432:29
	get@vendor.js:62432:29
	injectInjectorOnly@vendor.js:59866:29
	ɵɵinject@vendor.js:59872:59
	GetClientsService_Factory@ng:///GetClientsService/ɵfac.js:5:45
	hydrate@vendor.js:62573:31
	get@vendor.js:62422:25
	get@vendor.js:71283:34
	lookupTokenUsingModuleInjector@vendor.js:58072:31
	getOrCreateInjectable@vendor.js:58127:10
	ɵɵdirectiveInject@vendor.js:67453:10
	HomeComponent_Factory@ng:///HomeComponent/ɵfac.js:5:41
	getNodeInjectable@vendor.js:58338:38
	instantiateRootComponent@vendor.js:69744:36
	createRootComponent@vendor.js:71590:43
	create@vendor.js:71422:21
	initComponent@vendor.js:122631:45
	invoke@polyfills.js:542:160
	onInvoke@vendor.js:5648:35
	invoke@polyfills.js:542:48
	onInvoke@vendor.js:85971:25
	invoke@polyfills.js:542:48
	run@polyfills.js:208:37
	run@vendor.js:85780:26
	createComponent@vendor.js:122635:37
	createComponent@vendor.js:122912:35
	7263/</<@main.js:188:74
	invoke@polyfills.js:542:160
	onInvoke@vendor.js:5648:35
	invoke@polyfills.js:542:48
	run@polyfills.js:208:37
	runInTestZone@vendor.js:6024:28
	3761/</wrapTestInZone/<@vendor.js:6041:14
	<Jasmine>
	invoke@polyfills.js:542:160
	run@polyfills.js:208:37
	4924/</scheduleResolveOrReject/<@polyfills.js:1699:26
	invokeTask@polyfills.js:578:173
	runTask@polyfills.js:266:39
	drainMicroTaskQueue@polyfills.js:804:23
	Expected undefined to be truthy.
	<Jasmine>
	7263/</<@main.js:193:23
	invoke@polyfills.js:542:160
	onInvoke@vendor.js:5648:35
	invoke@polyfills.js:542:48
	run@polyfills.js:208:37
	runInTestZone@vendor.js:6024:28
	3761/</wrapTestInZone/<@vendor.js:6041:14
	<Jasmine>
	invoke@polyfills.js:542:160
	run@polyfills.js:208:37
	4924/</scheduleResolveOrReject/<@polyfills.js:1699:26
	invokeTask@polyfills.js:578:173
	runTask@polyfills.js:266:39
	drainMicroTaskQueue@polyfills.js:804:23
[1A[2KFirefox 104.0 (Linux x86_64): Executed 6 of 8[31m (2 FAILED)[39m (0 secs / 0.235 secs)
[1A[2KERROR: [36m'NG0304: 'mat-toolbar' is not a known element (used in the 'AppComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 104.0 (Linux x86_64): Executed 6 of 8[31m (2 FAILED)[39m (0 secs / 0.235 secs)
ERROR: 'NG0304: 'mat-toolbar' is not a known element (used in the 'AppComponent' component template):
1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KERROR: [36m'NG0304: 'app-loading' is not a known element (used in the 'AppComponent' component template):
1. If 'app-loading' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-loading' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'[39m
Firefox 104.0 (Linux x86_64): Executed 6 of 8[31m (2 FAILED)[39m (0 secs / 0.235 secs)
ERROR: 'NG0304: 'app-loading' is not a known element (used in the 'AppComponent' component template):
1. If 'app-loading' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
2. If 'app-loading' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.'
[1A[2KFirefox 104.0 (Linux x86_64): Executed 7 of 8[31m (2 FAILED)[39m (0 secs / 0.286 secs)
[1A[2KFirefox 104.0 (Linux x86_64): Executed 8 of 8[31m (2 FAILED)[39m (0 secs / 0.331 secs)
[1A[2KFirefox 104.0 (Linux x86_64): Executed 8 of 8[31m (2 FAILED)[39m (0.298 secs / 0.331 secs)
[31mTOTAL: 2 FAILED, 6 SUCCESS[39m
TOTAL: 2 FAILED, 6 SUCCESS
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
