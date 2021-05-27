# Tip
1. webpack本身只能处理js/json两种资源，css/image等都不可以，需要loader和plugin
2. 当css改变时，js也会重新加载，为了优化，需要把两者分开
3. 默认情况下，如果有200个模块，其中一个模块的code chenge，会重新打包所有模块，此时需要HMR（hot module replacement）热模块替换
4. style-loader内部实现了hmr，可以直接在dev server中配置，js/html没有默认实现
5. html文件一般只有一个，不需要hmr



# 疑问
1. 生产mode貌似会把无用变量清除----是的会优化代码